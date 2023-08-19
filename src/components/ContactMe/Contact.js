import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Particle from "../Home/Particle";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg("Email was sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (msg) {
    setTimeout(() => {
      setMsg("");
    }, 5000);
  }

  return (
    <div className="contact">
      <Particle />
      <div className="container">
        <div className="form-container">
          <h2 className="text-center mb-2" data-aos="fade-down">
            Contact
          </h2>
          <div
            className="underline"
            data-aos="fade-up"
            style={{ backgroundColor: "white" }}
          ></div>
          <h5 className="text-center text-success">{msg}</h5>
          <form onSubmit={submitHandler} ref={form}>
            <div className="form-group" data-aos="fade-right">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group" data-aos="fade-left">
              <label htmlFor="user_email">Email address</label>
              <input
                name="user_email"
                type="email"
                className="form-control"
                id="user_email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group" data-aos="zoom-in">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                className="form-control"
                id="message"
                rows="4"
                name="message"
                placeholder="write your message"
              />
            </div>
            <button type="submit" className="see-more">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
