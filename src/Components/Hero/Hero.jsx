import React from "react";
import "./hero.css";
import Hill from "../../assets/Hill.jpg"; // Assuming this is the profile image

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={Hill} alt="Profile" className="hero-image" />
        <h1>
          I'm <span>Alex Bennett</span>, frontend developer based in USA.
        </h1>
        <p>
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla, and Apple.
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
