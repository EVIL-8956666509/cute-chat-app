# 💕 Cute Chat App

Ek secure, private 1-to-1 chat application jo Node.js aur Socket.io pe built hai.

## ✨ Features

- 🔒 **Secure Rooms** - Har room ke liye unique token
- 👥 **1-to-1 Only** - Sirf 2 users ek room mein
- 🚫 **Screenshot Protection** - Screen recording detection
- 💕 **Cute UI** - Beautiful pink theme
- ⚡ **Real-time** - Instant message delivery
- 🎨 **Customizable** - Easy to modify

## 🚀 Installation

```bash
# Dependencies install karo
npm install

# Server start karo
npm start

# Ya development mode mein
npm run dev
```

## 🌐 Deploy on Render (Free)

### Step 1: GitHub Repository Connect Karo
1. [Render.com](https://render.com) pe jao aur login karo
2. "New +" button click karo → "Web Service" select karo
3. "Build and deploy from a Git repository" choose karo
4. Apna GitHub account connect karo
5. `cute-chat-app` repository select karo

### Step 2: Configure Karo
| Setting | Value |
|---------|-------|
| **Name** | cute-chat-app |
| **Environment** | Node |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | Free |

### Step 3: Deploy Karo
1. "Create Web Service" button click karo
2. Render automatically deploy karega
3. **Live URL mil jayegi!** 🎉

### Free Domain Milega:
- `https://cute-chat-app.onrender.com` (example)
- SSL certificate auto included
- 24/7 free hosting (sleeps after 15 min idle)

### Custom Domain Add Karne Ke Liye:
1. Render Dashboard → Your Service → Settings
2. "Custom Domains" section mein apna domain add karo
3. DNS records configure karo (Render guide follow karo)

## 📱 Usage

1. **Room Create Karo**:
   - "Create New Chat" button click karo
   - Link copy karo aur friend ko bhejo

2. **Room Join Karo**:
   - Invite link paste karo
   - Ya direct link se open karo

3. **Chat Karo**:
   - Apna naam enter karo
   - Message type karo aur send karo!

## 🔐 Security Features

- End-to-end encrypted messages
- Unique tokens for each session
- Auto-delete after disconnect
- Screenshot detection
- Right-click disabled
- Print screen blocked

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JS
- **Backend**: Node.js, Express
- **Real-time**: Socket.io
- **Security**: Crypto module

## 📁 Project Structure

```
chat-app/
├── server.js          # Main server file
├── package.json       # Dependencies
├── public/
│   ├── index.html     # Landing page
│   ├── chat.html      # Chat interface
│   ├── style.css      # Cute styles
│   ├── app.js         # Landing page JS
│   └── chat.js        # Chat functionality
└── README.md
```

## 🎨 Customization

### Colors Change Karne Ke Liye:
`public/style.css` mein `:root` section mein colors edit karo:

```css
:root {
    --primary-color: #ff6b9d;    /* Main pink color */
    --primary-dark: #e91e63;     /* Darker pink */
    --bg-gradient-start: #ffeaa7; /* Background start */
    --bg-gradient-end: #fab1a0;   /* Background end */
}
```

### Port Change Karne Ke Liye:
`server.js` mein:
```javascript
const PORT = process.env.PORT || 3000;  // Change 3000 to your port
```

## 📝 License

MIT License

## 💝 Made with Love

Cute Chat App - Secure messaging for you and your special someone! 💕
