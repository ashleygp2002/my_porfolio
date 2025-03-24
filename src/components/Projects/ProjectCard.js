
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const isSlider = Array.isArray(project.image);
  const projectLink = project.links?.[0]?.url || "#";

  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        {isSlider ? (
          <Swiper navigation={true} modules={[Navigation]} className="aggressive-swiper">
            {project.image.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src={project.image} alt={project.title} />
        )}

        <div className="description">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
