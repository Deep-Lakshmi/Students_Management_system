import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./src/routes/studentRoutes.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);
app.use(express.json());

app.get("/api/health", (req, res) =>
  res.json({ success: true, message: "Student API is running" }),
);
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/student_management",
  )
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
