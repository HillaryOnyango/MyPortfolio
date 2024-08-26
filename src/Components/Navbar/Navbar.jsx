import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
