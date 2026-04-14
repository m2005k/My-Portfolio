
import React from "react";
import { projectData } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {

  const filteredProjects = projectData;

  return (
    <section id="projects" className="reveal">
      <h2>My Projects</h2>

      <div className="grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* IMAGE SECTION */}
            <div className="card-image">
              <img src={project.image} alt={project.title} />

              {/* OVERLAY (HOVER BUTTONS) */}
              <div className="overlay">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>

            {/* TEXT */}
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