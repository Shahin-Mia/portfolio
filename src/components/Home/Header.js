import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import img from "../../images/coloredBackground.jpg";
import Particle from "./Particle";

const Header = () => {
  const [typeState, setTypeState] = useState(true);
  const done = () => {
    setTypeState(false);
    setTypeState(true);
  };

  return (
    <div className="header">
      <Particle></Particle>
      <div className="container summary">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-12" data-aos="fade-right">
            <h1 className="title">
              Hello, I'm <span className="my-name">Shahin Mia</span>
            </h1>
            <h3>
              {typeState ? (
                <Typist onTypingDone={() => setTimeout(done, 3000)}>
                  <span>Front-End Web Developer</span>
                  <Typist.Backspace count={23} delay={2000} />
                  <span> Web Designer</span>
                  <Typist.Backspace count={12} delay={1000} />
                  <span>Web Application Developer</span>
                  <Typist.Backspace count={25} delay={2000} />
                  <spna>Programmer</spna>
                </Typist>
              ) : (
                ""
              )}
            </h3>
            <a
              href="https://drive.google.com/uc?export=download&id=1o8O2Iu4Vl7LrbnuTzgwxfqsnafVBeXjd"
              rel="noreferrer"
              target="_blank"
              type="button"
              className="btn btn-light px-4 py-2 mt-3"
            >
              Download CV
            </a>
          </div>
          <div
            className="col-md-6 col-12 d-flex justify-content-center"
            data-aos="fade-left"
          >
            <img src={img} className="img-fluid img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
