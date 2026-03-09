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

### 💻 PC/Laptop Pe

```bash
# Dependencies install karo
npm install

# Server start karo
npm start

# Ya development mode mein
npm run dev
```

### 📱 Android (Termux) Pe

Termux app se phone pe bhi chala sakte ho!

#### Step 1: Termux Install Karo
1. [F-Droid](https://f-droid.org/packages/com.termux/) se Termux download karo
2. Termux open karo

#### Step 2: Dependencies Install Karo
```bash
# Package update karo
pkg update && pkg upgrade -y

# Node.js install karo
pkg install nodejs -y

# Git install karo
pkg install git -y
```

#### Step 3: Project Clone Karo
```bash
# Home directory mein jao
cd ~

# Repository clone karo
git clone https://github.com/EVIL-8956666509/cute-chat-app.git

# Project folder mein jao
cd cute-chat-app
```

#### Step 4: Server Start Karo
```bash
# Dependencies install karo
npm install

# Server start karo
npm start
```

#### Step 5: Phone Pe Access Karo
- Browser mein open karo: `http://localhost:3000`
- Ya same WiFi pe dusre device se: `http://<phone-ip>:3000`

#### Phone IP Check Karne Ke Liye:
```bash
ifconfig
```
Ya
```bash
ip addr show
```

**Note:** Phone ko same WiFi network pe hona chahiye dusre device ke saath.

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Real-time:** Socket.io
- **Frontend:** HTML5 + CSS3 + Vanilla JS
- **Security:** Crypto for token generation

## 📁 Project Structure

```
cute-chat-app/
├── server.js              # Main server file
├── package.json           # Dependencies
├── README.md             # Documentation
├── render.yaml           # Render deployment config
├── public/               # Static files
│   ├── index.html        # Landing page
│   ├── chat.html         # Chat interface
│   ├── style.css         # Styles
│   ├── app.js            # Landing page logic
│   ├── chat.js           # Chat functionality
│   └── animations.js     # Animation system
└── android-app/          # Android WebView template
    ├── MainActivity.java
    ├── AndroidManifest.xml
    └── build.gradle
```

## 🔧 Environment Variables

`.env` file create karo (optional):

```env
PORT=3000
NODE_ENV=production
```

## 📱 APK Build Karna

Android app banane ke liye:

### Option 1: Android Studio
1. `android-app/` folder Android Studio mein open karo
2. `MainActivity.java` mein apna server URL daalo
3. Build → Generate Signed APK

### Option 2: Sketchware (Mobile)
1. Sketchware app install karo
2. WebView component add karo
3. Apna URL set karo
4. Export APK

## 🤝 Contributing

Contributions welcome hain! 

1. Fork karo
2. Branch banao (`git checkout -b feature/xyz`)
3. Changes karo
4. Push karo (`git push origin feature/xyz`)
5. Pull Request banao

## 📝 License

MIT License - Free to use and modify!

## 💝 Credits

Made with 💕 by EVIL-8956666509

---

**Happy Chatting!** 💬✨
