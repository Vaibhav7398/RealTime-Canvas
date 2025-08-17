# 🎨 RealTime Canvas  

## 📌 Overview  

**RealTime Canvas** is a **real-time collaborative whiteboard** application that empowers users to brainstorm, share ideas, and collaborate visually — just like a physical whiteboard, but online.  

With drawing tools, text inputs, image uploads, and live chat, teams and individuals can work together seamlessly across devices.  

---

## ✨ Features  

- ⚡ **Real-time collaboration** with multiple users (Socket.IO)  
- 🖊️ **Drawing tools** (pen, highlighter, shapes, colors, eraser)  
- 🔤 **Text tools** (add, edit, and style text)  
- 🖼️ **Image upload & manipulation** (move, resize, rotate)  
- 👤 **User authentication & roles** (JWT, OAuth)  
- 💾 **Save & load sessions** for persistent whiteboards  
- 📤 **Export boards** as PNG / PDF  
- 💬 **Built-in chat system** for communication  
- 📱 **Responsive UI** (desktop, tablet, mobile)  
- 🔗 **Integrations** (Slack, Teams, Google Drive)  

---

## 🛠️ Tech Stack  

**Frontend:** React.js, Next.js, TailwindCSS  
**Backend:** Node.js, Express.js, Socket.IO  
**Database:** MongoDB (Atlas)  
**Authentication:** JWT, OAuth 2.0  
**Deployment:** Vercel / Netlify / Heroku / GitHub Pages  

---

## ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Vaibhav7398/RealTime-Canvas.git
cd RealTime-Canvas
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Run Development Server
bash
Copy
Edit
npm run dev
4️⃣ Build the Project
bash
Copy
Edit
npm run build
5️⃣ Start Production Server
bash
Copy
Edit
npm start
🚀 Deployment Instructions
📍 Deploy to GitHub Pages
bash
Copy
Edit
npm run build
npm run deploy
📍 Deploy to Vercel (Recommended)
Push repo to GitHub.

Go to Vercel.

Import your repository.

Set environment variables (if needed).

Deploy 🚀

📜 Available Scripts
Command	Description
npm run dev	Run dev server with hot reload
npm run build	Build project (frontend + backend)
npm start	Start production server
npm run lint	Run linter
npm run deploy	Deploy to GitHub Pages
