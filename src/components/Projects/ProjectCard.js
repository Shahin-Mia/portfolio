import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSpring } from 'react-spring';
import { animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 150, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ProjectCard = ({ project }) => {
    const { name, screenShot, url, dataAos, desc, source } = project;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="col mb-5" data-aos={dataAos}>
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div className="card">
                    <img src={screenShot} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{name.toUpperCase()}</h5>
                        <p>{desc}</p>
                        <div className="d-flex justify-content-around">
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark px-4">
                                <FontAwesomeIcon icon={faGlobe} />Live Site
                            </a>
                            <a href={source} rel="noreferrer" target="_blank" className="btn btn-dark">
                                <FontAwesomeIcon icon={faGithub} /> Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>

    );
};

export default ProjectCard;