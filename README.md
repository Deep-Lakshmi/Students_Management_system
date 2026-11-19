# Student Management System (MERN)

A ready-to-run MERN project with 5 frontend pages:
1. Dashboard
2. Students
3. Add Student
4. Courses
5. About

## Requirements
- Node.js (v18+)
- MongoDB Community Server running locally, OR a MongoDB Atlas connection string

## 1. Start MongoDB
Make sure your local MongoDB service is running. The backend uses:
`mongodb://127.0.0.1:27017/student_management`

If using Atlas, replace `MONGO_URI` in `backend/.env`.

## 2. Run backend
Open terminal:
```bash
cd backend
npm install
```
Create `.env` from `.env.example` (or rename/copy it) and then:
```bash
npm run dev
```
Backend: http://localhost:5000
Health check: http://localhost:5000/api/health

## 3. Run frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the Vite URL shown in terminal (normally http://localhost:5173).

## Features
- Create, view, update and delete students
- Search students
- Dashboard counts and recent students
- Courses overview
- MongoDB persistence through Mongoose
- Form validation and API error messages

## Viva explanation
Frontend: React + React Router + Axios.
Backend: Node.js + Express REST API.
Database: MongoDB with Mongoose model.
CRUD: POST creates, GET reads, PUT updates, DELETE removes student records.
