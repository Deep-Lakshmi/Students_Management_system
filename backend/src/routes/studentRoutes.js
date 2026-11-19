import { Router } from "express";
import Student from "../models/Student.js";

const router = Router();

// GET all students (optional search)
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    const filter = search ? { $or: [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { course: { $regex: search, $options: "i" } }
    ] } : {};
    res.json(await Student.find(filter).sort({ createdAt: -1 }));
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// Dashboard stats
router.get("/stats/summary", async (req, res) => {
  try {
    const [total, active, courses, recent] = await Promise.all([
      Student.countDocuments(),
      Student.countDocuments({ status: "Active" }),
      Student.distinct("course"),
      Student.find().sort({ createdAt: -1 }).limit(5)
    ]);
    res.json({ total, active, inactive: total - active, courseCount: courses.length, recent });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// GET one
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) { res.status(400).json({ message: "Invalid student ID" }); }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(err.code === 11000 ? 409 : 400).json({
      message: err.code === 11000 ? "This email is already registered" : err.message
    });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(err.code === 11000 ? 409 : 400).json({
      message: err.code === 11000 ? "This email is already registered" : err.message
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (err) { res.status(400).json({ message: "Invalid student ID" }); }
});

export default router;
