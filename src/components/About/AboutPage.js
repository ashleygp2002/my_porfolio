import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Drone1 from "../../assets/AboutImages/Drone1.png";
import Drone2 from "../../assets/AboutImages/Drone2.png";
import Soccer1 from "../../assets/AboutImages/soccer1.png";
import Soccer2 from "../../assets/AboutImages/soccer2.png";
import SHPE1 from "../../assets/AboutImages/SHPE1.png";
import SHPE2 from "../../assets/AboutImages/SHPE2.png";
import HSF from "../../assets/AboutImages/HSF.png";

const AboutPage = () => {
  const sections = [
    {
      text: "When I’m not coding, I love playing soccer. I was on the intramural soccer team at UC Merced, and we won the tournament!",
      image: [Soccer1, Soccer2],
    },
    {
      text: "The 2024 summer, I served as an instructor at DroneCamp under Dr. Brandon Stark at CSU Monterey Bay, helping others learn to fly and understand drone technology.",
      image: [Drone1, Drone2],
    },
    {
      text: "I had the opportunity to attend the SHPE 50th Anniversary Conference in Anaheim which was a huge opportunity to connect, learn, and grow alongside other future engineers.",
      image: [SHPE1,SHPE2],
    },
    {
        text: "In 2024, I was honored to receive the prestigious HSF (Hispanic Scholarship Fund) scholarship.",
        image: [HSF],
      },
  ];

  return (
    <div className="about-page">
      <div className="intro-section">
        <h1>About Me</h1>
        <p>
          Hi! I'm Ashley Gonzalez Perez, a passionate developer with experience in AI, deep learning, and web development. I love building elegant interfaces and solving real-world problems with tech.
        </p>
        <p>
          I've collaborated on projects involving large language models, responsive websites, and intelligent automation systems. I'm currently exploring how AI can understand human emotions and social cues to improve communication.
        </p>
      </div>



      {sections.map((section, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`about-section ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="about-text">
            <p>{section.text}</p>
          </div>
          <div className="about-image">
            {section.image.length > 1 ? (
              <Swiper navigation={true} modules={[Navigation]} className="about-swiper">
                {section.image.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`About ${index + 1} - ${i + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img src={section.image[0]} alt={`About ${index + 1}`} />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutPage;
