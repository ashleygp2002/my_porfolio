import React from "react";
import ParticleBackground from "./components/Title/ParticleBackground";
import TitleScreen from "./components/Title/TitleScreen";
import NavBar from "./components/NavBar";
import "./styles.css";

const App = () => {
    return (
        <div className="app-container">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Navigation Bar */}
            <NavBar />

            {/* Main Content */}
            <div className="title-wrapper">
                <TitleScreen />
            </div>

            <section id="about" className="background2">
                <h1>About</h1>
            </section>

            <section id="projects" className="background1">
                <h1>Projects</h1>
            </section>

            <section id="experience" className="background2">
                <h1>Experience</h1>
            </section>

            <section id="contact" className="background1">
                <h1>Contact</h1>
            </section>
        </div>
    );
};

export default App;
