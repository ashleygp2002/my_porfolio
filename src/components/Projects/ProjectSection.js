import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";
import SweepAIPoster from "../../assets/ProjectImages/SweepAIPoster.png";


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
    title: "HackDavis 2024: JobScoper",
    description:
      "JobScoper is a React app that scrapes job postings to check fit. Uses Selenium, OpenAI API, and social justice APIs for location info.",
    image: "/assets/ProjectImages/JobScoperScreenCap.png",
    links: [{ title: "DevPost", url: "https://devpost.com/software/job-scoper" }],
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
    title: "PUNKT: Distribution Center Data Analysis",
    description:
      "Analyzed real-world data from a shipping center in the Netherlands for my final study abroad project.",
    image: "/assets/ProjectImages/Punkt.png",
    links: [{ title: "Google Drive", url: "https://drive.google.com/file/d/1OotQMgFvDIU7ONffWX_rZKqa9sKB3F5e/view?usp=sharing" }],
  },
  {
    id: 5,
    title: "This Website!",
    description:
      "A recursive portfolio? Built using React and hosted on GitHub Pages.",
    image: "/assets/ProjectImages/SiteCap.png",
    links: [{ title: "GitHub", url: "https://github.com/ajgrant6/ajgrant6.github.io" }],
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
