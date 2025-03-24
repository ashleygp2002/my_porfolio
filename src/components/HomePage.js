import React from "react";
import TitleScreen from "./Title/TitleScreen";
import AboutSection from "./About/AboutSection";

const HomePage = () => {
    return (
        <div>
            <div className="title-wrapper">
                <TitleScreen />
            </div>

            <AboutSection />

            <section id="experience" className="background2">
                {/* <h1>Experience</h1> */}
                
            </section>
            

            {/* <section id="contact" className="background1">
                <h1>Contact</h1>
            </section> */}
        </div>
    );
};

export default HomePage;
