import React from "react";
import projects from "../Home/ProjectList";
import ProjectCard from "./ProjectCard";

function Projects() {
  const allProjects = projects;

  return (
    <div className="project-container">
      <div className="container my-5">
        <h2 className="text-center" data-aos="fade-down">
          Projects
        </h2>
        <div className="underline mb-5" data-aos="fade-left"></div>
        <div className="row row-cols-1 row-cols-md-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-center mb-4" data-aos="fade-up">
          To see all projects code
          <a
            rel="noreferrer"
            href="https://github.com/Shahin-Mia?tab=repositories"
            target="_blank"
          >
            click here
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Projects;
