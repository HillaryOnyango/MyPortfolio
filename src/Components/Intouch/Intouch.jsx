import React from "react";
import "./intouch.css";

function Intouch() {
  return (
    <section className="intouch">
      <h2 className="intouch-title">Get in touch</h2>
      <div className="intouch-container">
        <div className="intouch-info">
          <h3 className="info-title">Let's talk</h3>
          <p className="info-text">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <p>
              <span className="icon">✉</span> greatstackdev@gmail.com
            </p>
            <p>
              <span className="icon">📞</span> +772-825-524
            </p>
            <p>
              <span className="icon">📍</span> CA, United States
            </p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Write your message here" required></textarea>
          <div className="captcha">
            <input type="checkbox" id="human-check" />
            <label htmlFor="human-check">I am human</label>
          </div>
          <button type="submit" className="submit-btn">
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Intouch;
