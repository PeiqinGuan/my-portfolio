import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  const { ref: headerRef, inView: headerIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: skillsRef, inView: skillsIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: projectsIsVisible } = useInView({
    threshold: 0.1,
  });
  const { ref: projectItemRef, inView: projectItemIsVisible } = useInView({
    threshold: 0.1,
  });
  const { ref: contactRef, inView: contactIsVisible } = useInView({
    threshold: 0.3,
  });

  return (
    <>
      <Nav />
      <Header headerRef={headerRef} headerIsVisible={headerIsVisible} />
      <Skills skillsRef={skillsRef} skillsIsVisible={skillsIsVisible} />
      <Projects
        projectsRef={projectsRef}
        projectsIsVisible={projectsIsVisible}
        projectItemRef={projectItemRef}
        projectItemIsVisible={projectItemIsVisible}
      />
      <Contact contactRef={contactRef} contactIsVisible={contactIsVisible} />
      <Footer />
    </>
  );
}

export default App;
