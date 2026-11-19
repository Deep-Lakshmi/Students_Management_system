import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api";

const initial = { name:"", email:"", phone:"", course:"", year:"1st Year", status:"Active" };
export default function StudentForm() {
  const [form,setForm]=useState(initial);
  const [error,setError]=useState("");
  const [saving,setSaving]=useState(false);
  const {id}=useParams(); const navigate=useNavigate();
  useEffect(()=>{ if(id) api.get(`/students/${id}`).then(r=>setForm({...initial,...r.data})).catch(()=>setError("Student record not found.")); },[id]);
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=async e=>{ e.preventDefault(); setSaving(true); setError(""); try { if(id) await api.put(`/students/${id}`,form); else await api.post("/students",form); navigate("/students"); } catch(err) { setError(err.response?.data?.message || "Could not save student. Check backend connection."); } finally { setSaving(false); } };
  return <><div className="welcome-row"><div><h1>{id?"Edit Student":"Register New Student"}</h1><p>{id?"Update the student details below.":"Fill in the details to add a student to the database."}</p></div><Link to="/students" className="secondary-btn">Back to Students</Link></div>
    <section className="panel form-panel"><div className="panel-head"><div><h3>Student Information</h3><p>Fields marked with * are required</p></div></div>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={submit} className="student-form">
        <label>Full Name *<input name="name" value={form.name} onChange={change} placeholder="Enter full name" required minLength="2"/></label>
        <label>Email Address *<input name="email" type="email" value={form.email} onChange={change} placeholder="student@example.com" required/></label>
        <label>Phone Number<input name="phone" value={form.phone} onChange={change} placeholder="Enter phone number"/></label>
        <label>Course *<select name="course" value={form.course} onChange={change} required><option value="">Select course</option><option>B.Tech CSE</option><option>BCA</option><option>MCA</option><option>BBA</option><option>B.Com</option><option>BA</option><option>B.Sc</option></select></label>
        <label>Academic Year *<select name="year" value={form.year} onChange={change}><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option><option>Final Year</option></select></label>
        <label>Status<select name="status" value={form.status} onChange={change}><option>Active</option><option>Inactive</option></select></label>
        <div className="form-actions"><button disabled={saving} className="primary-btn">{saving?"Saving...":id?"Update Student":"Save Student"}</button><Link className="secondary-btn" to="/students">Cancel</Link></div>
      </form>
    </section></>;
}
