import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-dark footer">
            <div className="container">
                <div>
                    <a href="https://facebook.com" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                    <a href="https://github.com/Shahin-Mia" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    <a href="https://www.linkedin.com/in/shahin-mia-bb35831b9/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                </div>
                <p> <FontAwesomeIcon icon={faCopyright} /> Copyright {new Date().getFullYear()}, All Rights are reserved by Shahin</p>
            </div>
        </footer>
    );
};

export default Footer;