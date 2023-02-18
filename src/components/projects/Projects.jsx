import { useState } from "react";
import "./projects.css";
import IMG1 from "../../assets/project1_1.png";
import IMG2 from "../../assets/project2_1.png";
import IMG3 from "../../assets/project3_1.png";
import IMG4 from "../../assets/project4_1.png";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ImageModal from "./ImageModal";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Youtube Clone",
    tags: ["React", "JavaScript", "Material UI", "CSS", "API"],
    description:
      "A simplified fully functional youtube clone with core components like video feeds, searchbar, channel site, and video playing site. The video feeds support infinite scrolling.",
    github: "https://github.com/PeiqinGuan/youtube-clone",
    demo: "https://joyful-begonia-aaf9d7.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Budget App",
    tags: ["React", "JavaScript", "Bootstrap", "CSS"],
    description:
      "A CRUD budget app in React, user can set budgets by category and record specific expenses for each budget.",
    github: "https://github.com/PeiqinGuan/react-budget-app",
    demo: "https://curious-squirrel-7ce608.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cloud Hosting Static Website",
    tags: ["HTML", "CSS"],
    description:
      "Static website with 3 pages showcasing a cloud hosting platform business.",
    github: "https://github.com/PeiqinGuan/Loruki-cloud-hosting",
    demo: "https://peiqinguan.github.io/Loruki-cloud-hosting/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Sneaker Landing Page",
    tags: ["HTML", "Sass"],
    description:
      "Product landing page with modern CSS techniques using Sass.",
    github: "https://github.com/PeiqinGuan/Great-shoes-landing-page",
    demo: "https://peiqinguan.github.io/Great-shoes-landing-page/",
  },
];

export default function Projects({projectsRef, projectsIsVisible, projectItemRef, projectItemIsVisible}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(1);

  const handleClick = (index) => {
    setOpenModal(true);
    setSelectedImage(index + 1);
    console.log(selectedImage);
  };

  return (
    <section id="projects" ref={projectsRef} className={`${projectsIsVisible && 'visible'}`}>
      <h2>My Projects</h2>
      <h5>more on the way</h5>

      <div  ref={projectItemRef} className="container projects__container">
        {data.map(
          ({ id, image, title, tags, description, github, demo }, index) => {
            return (
              <article className={`projects__item ${projectItemIsVisible && 'visible'}`} key={id}>
                <div
                  className="projects__item-image"
                  onClick={() => handleClick(index)}
                >
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="stack-tags">
                  {tags.map((tag) => {
                    return (
                      <div className="stack-tag" key={tag}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <p className="description">{description}</p>
                <div className="projects__item-cta">
                  <a href={github} className="btn" target="_blank">
                    <FaGithub />
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                    <FiArrowUpRight className="arrow" />
                  </a>
                </div>
              </article>
            );
          }
        )}
        <ImageModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedImage={selectedImage}
        />
      </div>
    </section>
  );
}
