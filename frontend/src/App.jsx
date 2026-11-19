import React from "react";
import { NavLink, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, UserPlus, BookOpen, Info, GraduationCap } from "lucide-react";
import Dashboard from "./pages/Dashboard.jsx";
import Students from "./pages/Students.jsx";
import StudentForm from "./pages/StudentForm.jsx";
import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";

const nav = [
  ["/", "Dashboard", LayoutDashboard],
  ["/students", "Students", Users],
  ["/add-student", "Add Student", UserPlus],
  ["/courses", "Courses", BookOpen],
  ["/about", "About", Info]
];
export default function App() {
  const location = useLocation();
  const title = nav.find(([path]) => path === location.pathname)?.[1] || "StudentHub";
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-icon"><GraduationCap size={23}/></span><span>Student<span className="brand-accent">Hub</span></span></div>
      <p className="nav-label">MENU</p>
      <nav>{nav.map(([path, label, Icon]) => <NavLink key={path} to={path} end={path === "/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="help-card"><div className="help-dot">?</div><b>Need help?</b><p>Manage your student records with ease.</p></div><small>© 2026 StudentHub</small></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><div><span className="eyebrow">STUDENT MANAGEMENT</span><h2>{title}</h2></div><div className="profile"><div className="avatar">A</div><div><b>Admin</b><small>Administrator</small></div></div></header>
      <div className="page-content"><Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/add-student" element={<StudentForm/>}/>
        <Route path="/edit-student/:id" element={<StudentForm/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes></div>
    </main>
  </div>;
}
