import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../images/coloredBackground.jpg';
import Skills from './Skills';


const About = () => {
    return (
        <div className="about-container fancy-bg">
            <div className="container">
                <h2 className="text-center" data-aos="fade-left">ABOUT</h2>
                <div className="underline" data-aos="fade-right"></div>
                <div className="row">
                    <div className="col-12 col-md-6" data-aos="fade-right">
                        <div className="d-flex flex-column align-items-center justify-content-around">
                            <img src={img} className="img-fluid" alt="" />
                            <div>
                                <p className="few-words mt-4">
                                    I am Front-end Web Developer. I can create web apps with my professional skills and it would be worked on all devices, efficient, lag-free. I can provide clean code and pixel perfect design. I also make website more and more interactive with web animations.
                            <FontAwesomeIcon icon={faSmileBeam} />
                                </p>
                                <a rel="noreferrer" href="https://drive.google.com/file/d/1qa7iYAZg-UiAerq44ZCycOjfsMJRsRzk/view" target="_blank" className="btn btn-dark">Download CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12" data-aos="fade-left">
                        <Skills></Skills>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;