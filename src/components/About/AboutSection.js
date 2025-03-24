import React from "react";
import { motion } from "framer-motion"; // Import animation library
import "./AboutSection.css";
import myImage from "../../assets/me.png"; // Ensure the correct path

const AboutSection = () => {
  return (
    <section id="about" className="about-container">
      {/* Section Title */}
      <motion.div 
        className="section-title-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About</h2>
      </motion.div>

      {/* Description Container */}
      <div className="description-container">
        {/* Left - Image with Slide-in Animation */}
        <motion.div 
          className="description-item description-item-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={myImage} alt="Ashley Gonzalez Perez" className="profile-image" />
        </motion.div>

        {/* Right - Text with Fade-in & Slide-up Animation */}
        <motion.div 
          className="description-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="description-text">
            <p>
              Hello, my name is <strong>Ashley Gonzalez Perez</strong>. I hold a <strong>Bachelor of Science in Computer Science </strong> 
              with a minor in <strong>Management, Business, and Economics</strong> from the University of California, Merced.
            </p>
            <p>
              My recent research focuses on the functionality and UI/UX requirements for <strong>data visualization in drone detection systems using Remote ID</strong>.
              I am constantly exploring new technologies and acquiring new skills.
            </p>
            <p>
              Thank you for visiting my site. I hope you find the content engaging and that you gain a better understanding of my work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
