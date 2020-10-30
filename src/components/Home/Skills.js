import React from 'react';

const Skills = () => {
    return (
        <div className="fancy-bg">
            <div className="container">
                <h2 className="text-center" data-aos="fade-left">SKILLS</h2>
                <div className="underline" data-aos="fade-right"></div>
                <div className="row">
                    <div className="col-md-6 col-12" data-aos="fade-right">
                        <h3>Few more things</h3>
                        <p>I'm a curious and passionate web developer. I love to learn new things for web development and apply those learnings by creating new projects. besides my professional skills, I am comfortable with some other technology such as - </p>
                        <ul>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Heroku</li>
                            <li>Firebase</li>
                            <li>Express.js</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>React-router</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-12" data-aos="fade-left">
                        <ul className="skills-progress">
                            <li>
                                <h5>Html</h5>
                                <div className="progress">
                                    <div className="progress-bar html" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </li>
                            <li>
                                <h5>CSS</h5>
                                <div className="progress">
                                    <div className="progress-bar css" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </li>
                            <li>
                                <h5>JavaScript</h5>
                                <div className="progress">
                                    <div className="progress-bar javaScript" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </li>
                            <li>
                                <h5>ReactJS</h5>
                                <div className="progress">
                                    <div className="progress-bar react" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </li>
                            <li>
                                <h5>Bootstrap</h5>
                                <div className="progress">
                                    <div className="progress-bar bootstrap" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </li>
                            <li>
                                <h5>Material-UI</h5>
                                <div className="progress">
                                    <div className="progress-bar material-ui" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;