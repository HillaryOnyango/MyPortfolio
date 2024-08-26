import React from "react";
import "./hero.css";
import Hill from "../../assets/Hill.jpg"; // Assuming this is the profile image

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={Hill} alt="Profile" className="hero-image" />
        <h1>
          I'm <span>Hillary Onyango</span>, frontend developer based in Nairobi,
          Kenya.
        </h1>
        <p>
          I am a frontend developer from Nairobi, Kenya with 1.5 years of
          experience in multiple companies like Safaricom, Onesha, and Savannah
          Informatics.
        </p>
        <div className="hero-buttons">
          <button className="btn-connect">Connect with me</button>
          <button className="btn-resume">My resume</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
