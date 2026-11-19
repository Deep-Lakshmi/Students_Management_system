# Student Management System

A full-stack **Student Management System** built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to manage student records through a simple, responsive, and user-friendly interface.

## 🌐 Live Demo

**[View Student Management System](https://student-management-frontend-l9vf.onrender.com)**

## 🚀 Features

- Add new student records.
- View all registered students.
- Update existing student information.
- Delete student records.
- Manage student details, including name, email, phone number, course, academic year, and status.
- Responsive and user-friendly interface.
- MongoDB database integration for persistent data storage.
- RESTful API integration between frontend and backend.

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

**Deployment:**
- Frontend: Render Static Site
- Backend: Render Web Service
- Database: MongoDB Atlas

## 📂 Project Structure

```text
Students_Management_system/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Deep-Lakshmi/Students_Management_system.git
```

### 2. Navigate to the Project Directory

```bash
cd Students_Management_system
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

### 4. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB Atlas connection string |
| `VITE_API_URL` | Backend API base URL |

**Note:** Never commit your `.env` files or expose database credentials in your GitHub repository.

## 📌 Purpose

This project was developed to demonstrate practical knowledge of full-stack web development using the MERN Stack, including REST API development, database integration, CRUD operations, and cloud deployment.

## 👩‍💻 Developer

**Deep Lakshmi**

- GitHub: [Deep-Lakshmi](https://github.com/Deep-Lakshmi)
- Project Repository: [Students Management System](https://github.com/Deep-Lakshmi/Students_Management_system)
- Live Application: [Student Management System](https://student-management-frontend-l9vf.onrender.com)

---

⭐ If you find this project useful, consider giving it a star!