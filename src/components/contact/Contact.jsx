import React from "react";
import "./contact.css";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";

export default function Contact({contactRef, contactIsVisible}) {
  return (
    <section ref={contactRef} id="contact" className={`${contactIsVisible && 'visible'}`}>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form action="https://formspree.io/f/mvonkvba" method="POST" className="contact-form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" rows="8"></textarea>
          </label>
          <div className="contact-row">
            <div className="social">
              <a href="mailto:peiqinguan@gmail.com">
                <HiOutlineMail />
              </a>
              <a
                href="https://www.linkedin.com/in/peiqin-guan-754b551b9"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </a>
              <a href="https://github.com/PeiqinGuan" target="_blank">
                <VscGithub />
              </a>
            </div>
            <button type="submit" className="btn btn-primary">
              Send <FiArrowUpRight className="arrow" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
