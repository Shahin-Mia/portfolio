import React from 'react';
import Particle from './Particle';
import img from '../../images/coloredBackground.jpg'

const Header = () => {
    return (
        <div className="header">
            <Particle></Particle>
            <div className="container summary">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12">
                        <h1 className="title">Hello, I'm <span className="my-name">Shahin Mia</span> <br /> I'm a Front-end Web Developer</h1>
                        <button type="button" className="btn btn-light px-4 py-2 mt-3">Download CV</button>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center">
                        <img src={img} className="img-fluid img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;