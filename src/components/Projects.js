
import React, { useState } from "react";
import { projectData } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  const [filter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {/* FILTER BUTTONS */}
      {/* <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("react")}>React</button>
        <button onClick={() => setFilter("js")}>JavaScript</button>
      </div> */}

      <div className="grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-image">
              <img src={project.image} alt="project" />

              <div className="overlay">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;