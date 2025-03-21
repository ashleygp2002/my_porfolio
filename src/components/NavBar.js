import React from "react";
import "./NavBar.css"; // Import the CSS file
import { Link } from "react-router-dom"; 
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Icons

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">A</div>

        {/* Navigation Links */}
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/ashley-gonzalez-perez/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/ashleygp2002" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
            </a>
            <a href="mailto:agonzalezperez2020@gmail.com">
                <FaEnvelope className="icon" />
            </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

