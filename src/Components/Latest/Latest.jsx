import React from "react";
import "./latest.css";
import Latest1 from "../../assets/Latest1.svg";
import Latest2 from "../../assets/Latest2.svg";
import Latest3 from "../../assets/Latest3.svg";
import Latest4 from "../../assets/Latest4.svg";
import Latest5 from "../../assets/Latest5.svg";
import Latest6 from "../../assets/Latest6.svg";

function Latest() {
  const works = [
    { id: 1, img: Latest1, alt: "Educational website" },
    { id: 2, img: Latest2, alt: "Social media dashboard" },
    { id: 3, img: Latest3, alt: "Movie dashboard" },
    { id: 4, img: Latest4, alt: "VR website" },
    { id: 5, img: Latest5, alt: "Dental website" },
    { id: 6, img: Latest6, alt: "Portfolio theme" },
  ];

  return (
    <section className="latest-work">
      <h2 className="latest-work-title">My latest work</h2>
      <div className="work-grid">
        {works.map((work) => (
          <div key={work.id} className="work-item">
            <img src={work.img} alt={work.alt} className="work-image" />
          </div>
        ))}
      </div>
      <button className="show-more-btn">Show More →</button>
    </section>
  );
}

export default Latest;
