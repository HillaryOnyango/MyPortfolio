import React from "react";
import "./about.css";
import Hoa from "../../assets/Hill.jpg"; // Assuming this is the profile image

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
          <img src={Hoa} alt="Profile" className="about-image" />
        </div>
        <div className="about-right">
          <h2>
            About <span>me</span>
          </h2>
          <p>
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <p>
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>
          <div className="skills">
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span>React JS</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span>Next JS</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
          <div className="experience-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>90+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
