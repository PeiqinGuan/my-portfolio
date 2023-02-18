import React from "react";
import "./header.css";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

export default function Header({ headerRef, headerIsVisible }) {
  return (
    <header>
      <div
        ref={headerRef}
        className={`container header__container ${
          headerIsVisible && "visible"
        }`}
      >
        <div className="about">
          <h1>Hi, I'm Peiqin Guan.</h1>
          <h3 className="text-light">A Self-Taught Frontend Developer</h3>
          <div className="location">
            <img
              src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/5fd67d88e589fa52700f6034_MapPin.svg"
              alt=""
            />
            Germany
          </div>
          <p>
            I am highly motivated and results-driven. My goal is to work at a
            company, where I can deliver business value, while also leveling up
            my skills as a developer.
          </p>
        </div>
        <div className="cube">
          <div className="cubespinner">
            <div className="face1">
              <AiFillHtml5 color="#F06529" />
            </div>
            <div className="face2">
              <DiCss3 color="#28A4D9" />
            </div>
            <div className="face3">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face4">
              <SiJavascript color="#f0db4f" />
            </div>
            <div className="face5">
              <DiSass color="#c69" />
            </div>
            <div className="face6">
              <FaBootstrap color="#712cf9" />
            </div>
          </div>
        </div>
        <a href="#skills" id="scroll-down">
          <SlArrowDown />
        </a>
      </div>
    </header>
  );
}
