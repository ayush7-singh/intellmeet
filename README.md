# intellmeet
# 🚀 IntellMeet

**IntellMeet** is a full-stack meeting management and collaboration platform built using the MERN stack. It enables users to create, manage, and track meetings while providing real-time communication through integrated chat functionality.

## 🌐 Live Demo

**Frontend:** https://intellmeet-r8yh.vercel.app

## 📌 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login Sessions
* Secure Password Hashing using bcryptjs

### 📅 Meeting Management

* Create Meetings
* View Meetings
* Edit Meetings
* Delete Meetings
* Meeting Details Page
* Participant Management

### 💬 Real-Time Chat

* Socket.io Powered Chat
* Meeting-Specific Chat Rooms
* Real-Time Message Delivery
* Persistent Chat Storage in MongoDB
* Chat History Retrieval

### 📊 Dashboard

* Meeting Statistics
* Dynamic Meeting Count
* Recent Meetings Overview
* Easy Navigation

### ☁️ Deployment

* Frontend hosted on Vercel
* Backend hosted on Render
* Database hosted on MongoDB Atlas

---

## 🛠️ Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* Socket.io

### Deployment

* Vercel
* Render
* MongoDB Atlas

---

## 📂 Project Structure

```text
IntellMeet
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── context
│   │   └── App.tsx
│   └── package.json
│
└── README.md
```

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/ayush7-singh/intellmeet.git
cd intellmeet
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

Run Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
```

### Meetings

```http
POST /api/meetings
GET /api/meetings
GET /api/meetings/:id
PUT /api/meetings/:id
DELETE /api/meetings/:id
```

### Messages

```http
POST /api/messages
GET /api/messages/:meetingId
```

---

## 📸 Screenshots

### Login Page

<img width="1902" height="907" alt="image" src="https://github.com/user-attachments/assets/198db6b1-34b8-4820-9e8d-b68f7179d26e" />


### Dashboard

<img width="1877" height="905" alt="image" src="https://github.com/user-attachments/assets/62f673a2-435d-4d1c-9158-4b0cf955b472" />


### Create Meeting

<img width="1902" height="906" alt="image" src="https://github.com/user-attachments/assets/389197e1-742d-4c65-a1f1-c6e1d76bbfca" />


### Meeting Details

<img width="1898" height="908" alt="image" src="https://github.com/user-attachments/assets/fbd6866b-a54e-4aa4-a29e-b2a01c0d4971" />


### Chat Room

<img width="1905" height="905" alt="image" src="https://github.com/user-attachments/assets/d5a17656-a5f2-4d1f-9044-61c79674dbc4" />


---

## 🔒 Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* User-Specific Data Access
* Secure API Communication

---

## 🚧 Future Enhancements

* WebRTC Video Calling
* Screen Sharing
* AI Meeting Summaries
* AI Action Item Extraction
* Team Workspaces
* Notification System
* Meeting Recording
* Calendar Integration

---

## 👨‍💻 Author

**Ayush Singh**

B.Tech, Ocean Engineering and Naval Architecture
Indian Institute of Technology Kharagpur

GitHub: https://github.com/ayush7-singh

---

## 📜 License

This project is developed for educational and internship purposes.
