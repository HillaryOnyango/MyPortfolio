import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">Hilla</h2>
          <p className="footer-description">
            I am a frontend developer from Nairobi, Kenya with 1.5 years of
            experience in multiple companies like Safaricom, Onesha, and
            Savannah Informatics.
          </p>
        </div>
        <div className="footer-right">
          <form className="footer-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 Amolo Onyango Hillary. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a href="#terms">Term of Services</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#connect">Connect with me</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
