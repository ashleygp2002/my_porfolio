import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const navigateToLink = () => {
    window.open(project.links[0].url, "_blank");
  };

  return (
    <div className="project-card" onClick={navigateToLink}>
      <img src={project.image} alt={project.title} />
      <div className="description">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
