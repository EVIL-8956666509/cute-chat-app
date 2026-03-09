const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Store active rooms and their users
const rooms = new Map();
const userRooms = new Map();

// Generate secure random token
function generateToken() {
  return crypto.randomBytes(16).toString('hex');
}

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API to create a new chat room
app.post('/api/create-room', (req, res) => {
  const roomId = generateToken();
  const joinToken = generateToken();
  const fullToken = `${roomId}_${joinToken}`; // Combined token for easy sharing
  
  rooms.set(roomId, {
    id: roomId,
    joinToken: joinToken,
    users: [],
    messages: [],
    createdAt: Date.now()
  });
  
  res.json({
    roomId: roomId,
    joinLink: `${req.headers.origin || 'http://localhost:3000'}/chat.html?room=${roomId}&token=${joinToken}`,
    token: fullToken // Return combined token
  });
});

// API to verify join token
app.get('/api/verify-room/:roomId', (req, res) => {
  const { roomId } = req.params;
  const { token } = req.query;
  
  const room = rooms.get(roomId);
  
  if (!room) {
    return res.status(404).json({ valid: false, error: 'Room not found' });
  }
  
  if (room.users.length >= 2) {
    return res.status(403).json({ valid: false, error: 'Room is full' });
  }
  
  // Allow if no users in room yet (creator joining first)
  // OR if token matches
  if (room.users.length === 0 || token === room.joinToken) {
    return res.json({ valid: true, roomId: roomId });
  }
  
  return res.status(403).json({ valid: false, error: 'Invalid token' });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Join room
  socket.on('join-room', ({ roomId, username }) => {
    const room = rooms.get(roomId);
    
    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }
    
    if (room.users.length >= 2) {
      socket.emit('error', { message: 'Room is full' });
      return;
    }
    
    // Add user to room
    socket.join(roomId);
    room.users.push({
      id: socket.id,
      username: username,
      joinedAt: Date.now()
    });
    userRooms.set(socket.id, roomId);
    
    // Notify user joined
    socket.to(roomId).emit('user-joined', {
      username: username,
      message: `${username} joined the chat 💕`
    });
    
    // Send previous messages
    socket.emit('previous-messages', room.messages);
    
    // Notify room is ready if 2 users
    if (room.users.length === 2) {
      io.to(roomId).emit('chat-ready', {
        message: 'Both users connected! Start chatting 💬'
      });
    }
    
    console.log(`${username} joined room ${roomId}`);
  });
  
  // Handle messages
  socket.on('send-message', ({ roomId, message, type = 'text' }) => {
    const room = rooms.get(roomId);
    if (!room) return;
    
    const user = room.users.find(u => u.id === socket.id);
    if (!user) return;
    
    const messageData = {
      id: crypto.randomBytes(8).toString('hex'),
      username: user.username,
      message: message,
      type: type,
      timestamp: Date.now()
    };
    
    // Store message (limit to last 100)
    room.messages.push(messageData);
    if (room.messages.length > 100) {
      room.messages.shift();
    }
    
    // Broadcast to room
    io.to(roomId).emit('new-message', messageData);
  });
  
  // Handle typing indicator
  socket.on('typing', ({ roomId, isTyping }) => {
    const room = rooms.get(roomId);
    if (!room) return;
    
    const user = room.users.find(u => u.id === socket.id);
    if (!user) return;
    
    socket.to(roomId).emit('user-typing', {
      username: user.username,
      isTyping: isTyping
    });
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    const roomId = userRooms.get(socket.id);
    if (roomId) {
      const room = rooms.get(roomId);
      if (room) {
        const user = room.users.find(u => u.id === socket.id);
        if (user) {
          socket.to(roomId).emit('user-left', {
            username: user.username,
            message: `${user.username} left the chat 😢`
          });
          room.users = room.users.filter(u => u.id !== socket.id);
          
          // Clean up empty rooms after 1 hour
          if (room.users.length === 0) {
            setTimeout(() => {
              if (rooms.get(roomId)?.users.length === 0) {
                rooms.delete(roomId);
                console.log(`Room ${roomId} deleted`);
              }
            }, 3600000);
          }
        }
      }
      userRooms.delete(socket.id);
    }
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Cute Chat Server running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} in your browser`);
  console.log(`🌐 External: http://152.58.17.16:${PORT}`);
});
