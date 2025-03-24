import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";
import SweepAIPoster from "../../assets/ProjectImages/SweepAIPoster.png";
import Snapcard from "../../assets/ProjectImages/Snapcard.png";
import website from "../../assets/ProjectImages/website.png";
import Aggressive1 from "../../assets/ProjectImages/aggresive_wraps1.png";
import Aggressive2 from "../../assets/ProjectImages/aggresive_wraps2.png";
import Aggressive3 from "../../assets/ProjectImages/aggresive_wraps3.png"; 
import Aggressive4 from "../../assets/ProjectImages/aggresive_wraps4.png";
import Aggressive5 from "../../assets/ProjectImages/aggresive_wraps5.png"; 
import RoyalCrown1 from "../../assets/ProjectImages/royal_crown1.png";
import RoyalCrown2 from "../../assets/ProjectImages/royal_crown2.png";
import RoyalCrown3 from "../../assets/ProjectImages/royal_crown3.png";







const projects = [
  {
    id: 1,
    title: "Sweep AI: LLM Fine-Tuning API",
    description:
      "My senior project at UC Merced. I worked with mentors and classmates at Sweep AI to create an API for fine-tuning large language models using Hugging Face, Docker, Flask, and PostgreSQL.",
    image: SweepAIPoster,
    links: [{ title: "GitHub", url: "https://github.com/CSE-120-316/Sweep-LLM-Builder" }],
  },
  {
    id: 2,
    title: "Website: Aggressive Wraps",
    description:
      "A responsive website for a local car wrap company. Features multiple pages and a gallery to showcase services, builds, and promotions.",
    image: [Aggressive1, Aggressive2, Aggressive3, Aggressive4, Aggressive5], 
    links: [{ title: "GitHub", url: "https://github.com/ashleygp2002/aggressive-car-raps" }],
  },

  {
    id: 4,
    title: "SnapACart",
    description:
      "An interactive shopping cart app that uses your camera to scan items and automatically adds them to your virtual cart. Developed for a project.",
    image: Snapcard,
    links: [{ title: "Google Drive", url: "https://github.com/JishTheFish20/SnapACart" }],
  },
  
  {
    id: 3,
    title: "Website: Royal Crown",
    description:
      "A clean and professional roofing service website for Royal Crown Roofing. Built to showcase services and collect contact information from potential clients.",
    image: [RoyalCrown1, RoyalCrown2, RoyalCrown3], 
    links: [{ title: "Website", url: "https://royalcrown-roofing.com/" }],
  },

  {
    id: 5,
    title: "This Website!",
    description:
      "Yes, this one! My personal portfolio website. Built with React, JavaScript, and CSS. Features a particle background, smooth scrolling, and a responsive design. It's designed to showcase my projects, skills, and passion for development.",
    image: website,
    links: [{ title: "GitHub", url: "https://github.com/ashleygp2002/my_porfolio" }],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="work-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};



export default WorkSection;
