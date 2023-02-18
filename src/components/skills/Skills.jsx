import React from "react";
import "./skills.css";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export default function Skills({ skillsRef, skillsIsVisible }) {
  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`${skillsIsVisible && "visible"}`}
    >
      <h2>My Dev Skills</h2>
      <h5>constantly learning</h5>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <AiFillHtml5 color="#F06529" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <DiCss3 color="#28A4D9" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              <SiJavascript color="#f0db4f" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <FaReact color="#5ED4F4" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              <FaBootstrap color="#712cf9" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skills__details">
              <DiSass color="#c69" />
              <h4>Sass</h4>
            </article>
            <article className="skills__details">
              <SiMaterialui color="#2290ff" />
              <h4>Material UI</h4>
            </article>
            <article className="skills__details">
              <SiTailwindcss color="#3bbef8" />
              <h4>Tailwind CSS</h4>
            </article>
            <article className="skills__details">
              <FaGitAlt color="#f54d27" />
              <h4>Git</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
