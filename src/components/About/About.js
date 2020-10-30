import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../images/coloredBackground.jpg';


const About = () => {
    return (
        <div className="about-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-8 px-5">
                        <h2 className="text-center">About Me</h2>
                        <p className="few-words">
                            I am Front-end Web Developer. I can create web apps with my professional skills and it would be worked on all devices, efficient, lag-free. I can provide clean code and pixel perfect design. I also make website more and more interactive with web animations.
                            <FontAwesomeIcon icon={faSmileBeam} />
                        </p>
                        <button className="btn btn-dark">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;