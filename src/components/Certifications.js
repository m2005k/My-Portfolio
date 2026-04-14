import React from "react";
import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="reveal">
      <h2>My Certifications</h2>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <img src={cert.image} alt="certificate" />
            <h3>{cert.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;