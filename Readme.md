# 🌙 Dream Journal - A Simple CRUD Application ✍️

Welcome to **Dream Journal**, a minimalist yet powerful app to log, edit, and relive your dreams! This project is a full CRUD (Create, Read, Update, Delete) application built with a front-end trio of HTML, CSS, and JavaScript, and a back-end powered by Node.js and Express.js. Perfect for dreamers and coders alike! 🌌

---

## 🚀 Project Overview

Dream Journal lets you:
- **Create** new dream entries with a title, description, date, and mood.
- **Read** all your logged dreams in stylish, mood-themed cards.
- **Update** any dream when memory strikes.
- **Delete** those nightmares you’d rather forget.

Built as a task to showcase CRUD functionality, it’s a blend of clean design and smooth functionality—ready to grow with your feedback!

---

## 💡 Features

- ✅ **Dream Entry Form:** Add dreams with title, description, date, and mood (Happy, Scary, Weird, Peaceful).
- ✅ **Dynamic Display:** View all dreams in real-time with mood indicators.
- ✅ **Edit & Delete:** Tweak or trash dreams with a click.
- ✅ **Responsive UI:** Simple, elegant design with Poppins font and custom CSS.
- ✅ **RESTful API:** Backend handles all CRUD operations seamlessly.

---

## 🛠️ Tech Stack

### Frontend:
- **HTML5**: Structure for the dream form and list.
- **CSS3**: Styling with custom classes (e.g., `.dream-card`, `.mood-indicator`).
- **JavaScript**: DOM manipulation, fetch API for CRUD actions.
- **Google Fonts**: Poppins for a modern, readable vibe.

### Backend:
- **Node.js**: Runtime for the server.
- **Express.js**: Lightweight framework for API routes.
- **CORS**: Enables cross-origin requests for local testing.

### Tools:
- **Code Editor**: Visual Studio Code (or your fave!).
- **Git**: Version control for tracking changes.

---

## 📂 Project Structure
```bash
dream-journal/
├── public/
│   ├── index.html       # Main HTML file
│   ├── style.css        # Custom styles
│   └── script.js        # Frontend logic
├── server.js            # Backend server with Express
├── package.json         # Node.js dependencies
└── README.md            # You’re here!
```

---

## 📸 Screenshots

- **Form**: Input your dream details!  
  *(Imagine a sleek form with a glowing "Save Dream" button.)*  
- **Dream List**: Cards with mood tags and action buttons!  
  *(Picture colorful mood indicators next to dream titles.)*

---

## 📋 Prerequisites

- **Node.js**: v16+ recommended.
- **npm**: Comes with Node.js for package management.
- **Git**: To clone this repo.

---

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository:
```bash
git clone https://github.com/sureshbarach2001/Dream-Journal.git
cd dream-journal
```
### 2️⃣ Install Dependencies:
```bash
npm install
```
### 3️⃣ Start the Backend Server:
```bash
node server.js
```
- Backend runs on http://localhost:3000.
### 4️⃣ Open the Frontend:
- Open public/index.html in your browser (or use a local server like live-server for a smoother experience).
### 5️⃣ Start Dreaming!
- Add, edit, and delete dreams via the UI while the backend handles the heavy lifting!
---
## 🌐 API Endpoints
- **GET /dreams:** Fetch all dreams.
- **GET /dreams/:id:** Fetch a single dream by ID.
- **POST /dreams:** Create a new dream.
- **PUT /dreams/:id:** Update an existing dream.
- **DELETE /dreams/:id:** Delete a dream.
---
## 📊 Project Status
- Current Status: Complete (Task 1 MVP).
- Version: 1.0.0
- Last Updated: March 16, 2025
---
### ⚠️ Known Issues
- Persistence: Dreams are stored in memory—refresh the server, and they vanish! (Future fix: Add a database.)
- Styling: Minimalist now, but could use more flair (e.g., animations).
---
## 🔧 Future Enhancements
- **Database:** Integrate MongoDB or localStorage for persistent data.
- **Animations:** Add transitions for dream cards (e.g., fade-in on create).
- **Search/Filter:** Find dreams by mood or date.
- **Deployment:** Host on Vercel or Render for public access.
---
## 🛠️ Contributing
- Fork this repo.
- Create a branch: git checkout -b feature/your-feature.
- Commit changes: git commit -m "Add something cool".
- Push: git push origin feature/your-feature.
- Open a Pull Request with your ideas!
---
# 📞 Contact
**GitHub:** SureshBarach2001

**Email:** saink4831@gmail.com