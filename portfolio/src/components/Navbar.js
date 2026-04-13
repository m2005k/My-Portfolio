import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;