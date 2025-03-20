import React from "react";
import "./NavBar.css"; // Add this for styles

const NavBar = () => {
    return (
        <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default NavBar;
