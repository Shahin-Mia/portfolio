import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../images/coloredBackground.jpg";
import Skills from "./Skills";

import { animated, useSpring } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 150,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const About = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div className="about-container fancy-bg">
      <div className="container">
        <h2 className="text-center" data-aos="fade-left">
          ABOUT
        </h2>
        <div className="underline" data-aos="fade-right"></div>
        <div className="row">
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              >
                <img src={img} className="img-fluid" alt="" />
              </animated.div>
              <div>
                <p className="few-words mt-4">
                  I am a dedicated Front-end Web Developer with a strong
                  background in Computer Science and Engineering. Proficient in
                  technologies such as React, Node.js, MongoDB, Java, Spring,
                  and Material-UI, ExpressJs I excel at creating pixel-perfect
                  designs and clean, efficient code. My expertise in web
                  animations enhances interactivity, and my commitment to
                  continuous learning keeps me up-to-date with industry trends.
                  I prioritize exceeding client expectations by tailoring
                  solutions to unique project needs. My goal is to innovate and
                  elevate the web development landscape with dynamic and
                  engaging user experiences.
                  <FontAwesomeIcon icon={faSmileBeam} />
                </p>
                <a
                  rel="noreferrer"
                  href="https://drive.google.com/uc?export=download&id=1o8O2Iu4Vl7LrbnuTzgwxfqsnafVBeXjd"
                  target="_blank"
                  className="btn btn-dark"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12" data-aos="fade-left">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
