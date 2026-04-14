import { React, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar.js";
import About from "./components/About";
import Projects from "./components/Projects.js";
import Certifications from "./components/Certifications.js";
import Contact from "./components/Contact.js";
import Skills from "./components/Skills";
import Hero from "./components/Hero.js";

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2, // trigger when 20% visible
      }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;