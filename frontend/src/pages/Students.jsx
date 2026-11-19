import React, { useEffect, useState } from "react";
import { Search, Pencil, Trash2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Students() {
  const [students,setStudents] = useState([]);
  const [search,setSearch] = useState("");
  const [error,setError] = useState("");
  const load = () => api.get("/students",{params:{search}}).then(r=>{setStudents(r.data);setError("");}).catch(()=>setError("Unable to load students. Check that backend and MongoDB are running."));
  useEffect(()=>{ const timer=setTimeout(load,250); return ()=>clearTimeout(timer); },[search]);
  const remove = async id => { if(!window.confirm("Delete this student record?")) return; try { await api.delete(`/students/${id}`); load(); } catch(e) { setError(e.response?.data?.message || "Delete failed"); } };
  return <><div className="welcome-row"><div><h1>Student Directory</h1><p>View and manage all registered students.</p></div><Link className="primary-btn" to="/add-student">+ Add Student</Link></div>
    <section className="panel"><div className="toolbar"><div className="search-box"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name, email or course..."/></div><span className="muted">{students.length} record(s)</span></div>
    {error && <div className="alert">{error}</div>}
    {students.length ? <div className="table-wrap"><table><thead><tr><th>STUDENT</th><th>PHONE</th><th>COURSE</th><th>YEAR</th><th>STATUS</th><th>ACTIONS</th></tr></thead><tbody>{students.map(s=><tr key={s._id}><td><b>{s.name}</b><small className="cell-sub">{s.email}</small></td><td>{s.phone || "—"}</td><td>{s.course}</td><td>{s.year}</td><td><span className={`status ${s.status.toLowerCase()}`}>{s.status}</span></td><td><div className="actions"><Link title="Edit" to={`/edit-student/${s._id}`} className="icon-btn"><Pencil size={16}/></Link><button title="Delete" onClick={()=>remove(s._id)} className="icon-btn danger"><Trash2 size={16}/></button></div></td></tr>)}</tbody></table></div> : <div className="empty-state"><Users size={30}/><b>No matching students</b><span>Try another search or add a student.</span></div>}
    </section></>;
}
