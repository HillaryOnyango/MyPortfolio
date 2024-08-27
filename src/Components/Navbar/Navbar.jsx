import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";
import logo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/latest">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
