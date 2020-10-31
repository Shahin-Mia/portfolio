import React from 'react'
import ProjectCard from './ProjectCard';
import projects from '../Home/ProjectList';

function Projects() {
    const allProjects = projects;

    return (
        <div className="project-container">
            <div className="container my-5">
                <h2 className="text-center" data-aos="fade-down">All Projects</h2>
                <div className="underline mb-5" data-aos="fade-left"></div>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        allProjects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
