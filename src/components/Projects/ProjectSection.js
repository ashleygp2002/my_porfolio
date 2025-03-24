import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";
import SweepAIPoster from "../../assets/ProjectImages/SweepAIPoster.png";
import Snapcard from "../../assets/ProjectImages/Snapcard.png";
import website from "../../assets/ProjectImages/website.png";
import Aggressive1 from "../../assets/ProjectImages/aggresive_wraps1.png";
import Aggressive2 from "../../assets/ProjectImages/aggresive_wraps2.png";
import Aggressive3 from "../../assets/ProjectImages/aggresive_wraps3.png"; 




const projects = [
  {
    id: 1,
    title: "Sweep AI: LLM Fine-Tuning API",
    description:
      "My senior project at UC Merced. Worked with mentors at Sweep AI to create an API for fine-tuning large language models. Used Hugging Face, Docker, Flask, and PostgreSQL.",
    image: SweepAIPoster,
    links: [{ title: "GitHub", url: "https://github.com/CSE-120-316/Sweep-LLM-Builder" }],
  },
  {
    id: 2,
    title: "Website: Aggressive Wraps",
    description:
      "A responsive car wrap business site with multiple pages and services gallery.",
    image: [Aggressive1, Aggressive2, Aggressive3], // 👈 now it's an array
    links: [{ title: "GitHub", url: "https://github.com/ashleygp2002/aggressive-car-raps" }],
  },
  
  {
    id: 3,
    title: "Kaggle: Store Sales Time Series Forecasting",
    description:
      "Time-series forecasting project using Python. Predicts store sales in Ecuador with Gradient Boosting models.",
    image: "/assets/ProjectImages/TimeSeriesStock.png",
    links: [{ title: "Notebook", url: "https://github.com/ajgrant6/store-sales-time-series-forecasting/blob/main/Analysis.ipynb" }],
  },
  {
    id: 4,
    title: "SnapACart",
    description:
      "Analyzed real-world data from a shipping center in the Netherlands for my final study abroad project.",
    image: Snapcard,
    links: [{ title: "Google Drive", url: "https://github.com/JishTheFish20/SnapACart" }],
  },
  {
    id: 5,
    title: "This Website!",
    description:
      "A recursive portfolio? Built using React and hosted on GitHub Pages.",
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
