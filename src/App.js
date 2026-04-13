import React from "react";
import "./App.css";

import Navbar from "./components/Navbar.js";
import About from "./components/About";
import Projects from "./components/Projects.js";
import Certifications from "./components/Certifications.js";
import Contact from "./components/Contact.js";
import Skills from "./components/Skills";
import Hero from "./components/Hero.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Projects />
      <Skills/>
      <Certifications />
      <Contact />
    </div>
  )
}

export default App;