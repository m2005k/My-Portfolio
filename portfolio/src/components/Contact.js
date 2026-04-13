import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_lkgrqoq",
      "template_o4iu9o9",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "ZfHeWW06RhhwA6pjH"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    })
    .catch(() => {
      setLoading(false);
      alert("Something went wrong ");
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* SUCCESS POPUP */}
        {success && (
          <div className="success-popup">
            Message Sent Successfully!
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;