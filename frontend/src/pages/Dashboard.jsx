import React, { useEffect, useState } from "react";
import { Users, UserCheck, UserX, BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0, courseCount: 0, recent: [] });
  const [error, setError] = useState("");
  useEffect(() => { api.get("/students/stats/summary").then(r => setStats(r.data)).catch(() => setError("Could not connect to backend. Start MongoDB and the backend server.")); }, []);
  const cards = [
    ["Total Students", stats.total, Users, "blue"],
    ["Active Students", stats.active, UserCheck, "green"],
    ["Inactive Students", stats.inactive, UserX, "orange"],
    ["Courses", stats.courseCount, BookOpen, "purple"]
  ];
  return <><div className="welcome-row"><div><h1>Welcome back, Admin! 👋</h1><p>Here’s what’s happening with your student database.</p></div><Link className="primary-btn" to="/add-student">+ Add Student</Link></div>
    {error && <div className="alert">{error}</div>}
    <div className="stats-grid">{cards.map(([label,value,Icon,color]) => <div className="stat-card" key={label}><div className={`stat-icon ${color}`}><Icon size={21}/></div><p>{label}</p><h2>{value}</h2><span className="muted">Updated just now</span></div>)}</div>
    <section className="panel"><div className="panel-head"><div><h3>Recently Added Students</h3><p>Latest records in your database</p></div><Link to="/students" className="text-link">View all <ArrowUpRight size={15}/></Link></div>
      {stats.recent.length ? <div className="table-wrap"><table><thead><tr><th>STUDENT</th><th>COURSE</th><th>YEAR</th><th>STATUS</th></tr></thead><tbody>{stats.recent.map(s=><tr key={s._id}><td><b>{s.name}</b><small className="cell-sub">{s.email}</small></td><td>{s.course}</td><td>{s.year}</td><td><span className={`status ${s.status.toLowerCase()}`}>{s.status}</span></td></tr>)}</tbody></table></div> : <div className="empty-state"><Users size={30}/><b>No students added yet</b><span>Add your first student to see records here.</span></div>}
    </section>
  </>;
}
