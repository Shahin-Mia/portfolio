import React from 'react';
import Particle from '../Home/Particle';

const Contact = () => {
    return (
        <div className="contact">
            <Particle />
            <div className="container">
                <div className="form-container">
                    <h2 className="text-center mb-2" data-aos="fade-down">Contact</h2>
                    <div className="underline" data-aos="fade-up" style={{ backgroundColor: 'white' }}></div>
                    <form>
                        <div class="form-group" data-aos="fade-right">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div class="form-group" data-aos="fade-left">
                            <label for="Email1">Email address</label>
                            <input type="email" class="form-control" id="Email1" placeholder="Your Email" />
                        </div>
                        <div class="form-group" data-aos="zoom-in">
                            <label for="message">Message</label>
                            <textarea type="text" class="form-control" id="message" rows="4" placeholder="write your message" />
                        </div>
                        <button type="submit" class="see-more">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;