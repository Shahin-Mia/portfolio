import React, { useState } from 'react';
import Particle from './Particle';
import img from '../../images/coloredBackground.jpg'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Header = () => {
    const [typeState, setTypeState] = useState(true);
    const done = () => {
        setTypeState(false);
        setTimeout(setTypeState(true), 800)
    }

    return (
        <div className="header">
            <Particle></Particle>
            <div className="container summary">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12">
                        <h1 className="title">
                            Hello, I'm <span className="my-name">Shahin Mia</span>
                            {typeState ? <Typist onTypingDone={done}>
                                I'm a
                                <span> Front-End Web Developer</span>
                                <Typist.Backspace count={23} delay={2000} />
                                <span> Web Designer</span>
                                <Typist.Backspace count={12} delay={1000} />
                                <span>Web Application Developer</span>
                            </Typist> : ""}
                        </h1>
                        <a href="https://drive.google.com/file/d/1qa7iYAZg-UiAerq44ZCycOjfsMJRsRzk/view" target="_blank" type="button" className="btn btn-light px-4 py-2 mt-3">Download CV</a>
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