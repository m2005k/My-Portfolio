
import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        <div className="about-image">
          <img src="/assets/Sam.jpg" alt="profile" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <h3>Hello, I'm Mandeep Kaur</h3>

          <p>
            I am a Bachelor of Technology student in Electronics and Computer Engineering at Guru Nanak Dev University with a strong interest in full-stack web development and modern web technologies.
          </p>

          <p>
            I have experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, and have built full-stack applications using the MERN stack.
          </p>

          <p>
            I am a dedicated learner with strong problem-solving skills and a passion for building impactful digital solutions.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;