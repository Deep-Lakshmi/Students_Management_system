import React from "react";
import { BookOpen, Code2, BriefcaseBusiness, Calculator, FlaskConical, Palette } from "lucide-react";
const courses = [
  {name:"B.Tech Computer Science",code:"CSE-101",duration:"4 Years",desc:"Programming, software engineering, databases and emerging technologies.",Icon:Code2},
  {name:"Bachelor of Computer Applications",code:"BCA-102",duration:"3 Years",desc:"Application development, computer fundamentals and web technologies.",Icon:BriefcaseBusiness},
  {name:"Master of Computer Applications",code:"MCA-201",duration:"2 Years",desc:"Advanced computing, software development and application architecture.",Icon:Calculator},
  {name:"Bachelor of Science",code:"BSC-103",duration:"3 Years",desc:"Scientific foundations, analytical thinking and practical learning.",Icon:FlaskConical},
  {name:"Bachelor of Business Administration",code:"BBA-104",duration:"3 Years",desc:"Management, business operations, finance and communication.",Icon:Palette},
  {name:"Bachelor of Commerce",code:"BCOM-105",duration:"3 Years",desc:"Accounting, economics, taxation and business practices.",Icon:BookOpen}
];
export default function Courses(){return <><div className="welcome-row"><div><h1>Courses</h1><p>Explore the academic programmes available in the institute.</p></div><span className="course-count">{courses.length} Programmes</span></div><div className="course-grid">{courses.map(({name,code,duration,desc,Icon})=><article className="course-card" key={code}><div className="course-icon"><Icon size={23}/></div><span className="course-code">{code}</span><h3>{name}</h3><p>{desc}</p><div className="course-foot"><span><BookOpen size={15}/> {duration}</span><span className="course-tag">Programme</span></div></article>)}</div></>}
