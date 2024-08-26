import React from "react";
import "./services.css";

function Services() {
  const services = [
    { id: "01", title: "Web design", color: "#FF69B4" },
    { id: "02", title: "Graphics design", color: "#9370DB" },
    { id: "03", title: "Social media", color: "#FF69B4" },
    { id: "04", title: "App design", color: "#8A2BE2" },
    { id: "05", title: "Digital marketing", color: "#FF8C00" },
    { id: "06", title: "Content writing", color: "#FFA500" },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2 className="service-id">{service.id}</h2>
            <h3 className="service-title" style={{ color: service.color }}>
              {service.title}
            </h3>
            <p className="service-description">
              Web development is the process of building, programming...
            </p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
