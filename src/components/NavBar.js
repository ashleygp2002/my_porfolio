import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo1.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Hamburger */}
        <div className="nav-header">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
