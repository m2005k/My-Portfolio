import React from "react";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section">
      <h1>Hi, I'm Mandeep Kaur</h1>

      <h2>Full Stack Developer (MERN)</h2>

      <p>
        I build responsive, scalable and user-friendly web applications
        using modern technologies like React, Node.js and MongoDB.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">
          View Projects
        </a>

        <a href="/resume.pdf" download className="btn secondary">
          Resume
        </a>

        <a 
        href="https://github.com/m2005k"
        target="_blank"
        rel="noreferrer"
        className="btn github"
      >
        <FaGithub /> GitHub
      </a>
     </div>
  </section>
  );
}

export default Hero;