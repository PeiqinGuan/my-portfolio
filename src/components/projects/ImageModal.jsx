import { useState } from "react";
import ReactDOM from "react-dom";
import "./imageModal.css";
import IMG1_1 from "../../assets/project1_1.png";
import IMG1_2 from "../../assets/project1_2.png";
import IMG1_3 from "../../assets/project1_3.png";
import IMG1_4 from "../../assets/project1_4.png";
import IMG2_1 from "../../assets/project2_1.png";
import IMG2_2 from "../../assets/project2_2.png";
import IMG2_3 from "../../assets/project2_3.png";
import IMG2_4 from "../../assets/project2_4.png";
import IMG3_1 from "../../assets/project3_1.png";
import IMG3_2 from "../../assets/project3_2.png";
import IMG3_3 from "../../assets/project3_3.png";
import IMG4_1 from "../../assets/project4_1.png";
import IMG4_2 from "../../assets/project4_2.png";
import IMG4_3 from "../../assets/project4_3.png";
import IMG4_4 from "../../assets/project4_4.png";

const imageData = {
  1: [
    { image: IMG1_1, text: "Video feeds" },
    { image: IMG1_2, text: "Channel site" },
    { image: IMG1_3, text: "Mobile version" },
    { image: IMG1_4, text: "Video playing site" },
  ],
  2: [
    { image: IMG2_1, text: "Budget Categories" },
    { image: IMG2_2, text: "Adding budget" },
    { image: IMG2_3, text: "Adding expense" },
    { image: IMG2_4, text: "Viewing expense" },
  ],
  3: [
    { image: IMG3_1, text: "Home page" },
    { image: IMG3_2, text: "Different sections" },
    { image: IMG3_3, text: "Doc page" },
  ],
  4: [
    { image: IMG4_1, text: "Hero section" },
    { image: IMG4_2, text: "Featured products" },
    { image: IMG4_3, text: "Product highlighting" },
    { image: IMG4_4, text: "Responsive layout" },
  ],
};

export default function ImageModal({ onClose, open, selectedImage }) {
  const [imageIndex, setImageIndex] = useState(0);

  let attr1 = {};
  let attr2 = {};

  if (imageIndex === 0) {
    attr1["disabled"] = "disabled";
  }

  if (imageIndex === imageData[selectedImage].length - 1) {
    attr2["disabled"] = "disabled";
  }

  const handleClose = () => {
    onClose();
    setImageIndex(0);
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          x
        </button>
        <img
          src={imageData[selectedImage][imageIndex].image}
          alt={imageData[selectedImage][imageIndex].text}
        />
        <div className="text">
          <p>{imageData[selectedImage][imageIndex].text}</p>
        </div>
        <button
          {...attr1}
          className="left-arrow-button"
          onClick={() => setImageIndex((prev) => prev - 1)}
        >
          &#8249;
        </button>
        <button
          {...attr2}
          className="right-arrow-button"
          onClick={() => setImageIndex((prev) => prev + 1)}
        >
          &#8250;
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
