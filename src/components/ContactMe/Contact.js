import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="form-container">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <label for="Email1">Email address</label>
                        <input type="email" class="form-control" id="Email1" placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" class="form-control" id="subject" placeholder="subject" />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea type="text" class="form-control" id="message" rows="4" placeholder="write your message" />
                    </div>
                    <button type="submit" class="see-more">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;