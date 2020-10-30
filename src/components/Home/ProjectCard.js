import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { name, screenShot, url, dataAos } = project;
    return (
        <a className="col mb-4" data-aos={dataAos} href={url} target="_blank">
            <div class="card">
                <img src={screenShot} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">{name}</h5>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;