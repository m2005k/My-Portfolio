import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="reveal">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;