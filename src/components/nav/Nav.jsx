import "./nav.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect, useCallback } from "react";
import ME from "../../assets/avatar.jpg";
import CV from "../../assets/Peiqin_Guan_Resume_IT.pdf";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("");
  const [openNav, setOpenNav] = useState(false);
  const [sup, setSup] = useState(false);
  const [y, setY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setShowNavbar(true);
      } else if (y < window.scrollY) {
        setShowNavbar(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  function servus() {
    setSup(true);
    setTimeout(() => setSup(false), 1000);
  }

  return (
    <div className={`container navbar ${showNavbar && "show"}`}>
      <div className="avatar" onClick={servus}>
        <img src={ME} alt="icon" className={`${sup && "active"}`} />
        <div className={`sup-text ${sup && "active"}`}>Servus</div>
      </div>
      <a href={CV} download="Peiqin Guan's CV" className="cta">
        <FiDownload />
        <p>Download CV</p>
      </a>
      <button className="menu-button" onClick={() => setOpenNav(!openNav)}>
        <svg
          stroke="#333"
          fill="none"
          className={`hamburger ${openNav && "open"}`}
          viewBox="-10 -10 120 120"
          width="50"
        >
          <path
            className="line"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </button>
      <nav className={`hamburger ${openNav && "open"}`}>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineUser /> About
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BiBook /> Skills
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <FaAppStore /> Projects
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <HiOutlineMail /> Contact
        </a>
      </nav>
    </div>
  );
}
