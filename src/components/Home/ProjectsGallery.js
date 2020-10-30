import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projects from './ProjectList';

const ProjectsGallery = () => {
    const data = projects.slice(0, 3);
    console.log(data);
    return (
        <div className="container projects">
            <h2 className="text-center">Projects</h2>
            <div className="underline"></div>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    data.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
            <Link className="nav-link see-more" to="/projects">See More</Link>
        </div>
    );
};

export default ProjectsGallery;