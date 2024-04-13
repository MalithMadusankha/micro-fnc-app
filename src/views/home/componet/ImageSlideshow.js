import React, { useState } from "react";
import { Col, Media } from "reactstrap"; // Assuming you're using Bootstrap components
import { IoCaretBackCircle } from "react-icons/io5";
import { IoCaretForwardCircle } from "react-icons/io5";

const ImageSlideshow = () => {
  const images = [
    require("../../../assets/img/j-3.jpg"),
    require("../../../assets/img/house-1.jpeg"),
    require("../../../assets/img/mobile-1.jpg"),
    require("../../../assets/img/land-1.jpeg"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Col>
      <Media className="align-items-center justify-content-center">
        <Col lg={12}>
          <img
            alt="..."
            src={images[currentImageIndex]}
            className="w-100 rounded-3"
          />
        </Col>
        <div className="position-absolute top-47 left-6 bg-black p-1 rounded-5">
          <IoCaretBackCircle
            className="cursor-p"
            size={35}
            color="white"
            onClick={goToPreviousImage}
          />
        </div>
        <div className="position-absolute top-47 right-6 bg-black p-1 rounded-5">
          <IoCaretForwardCircle
            className="cursor-p"
            size={35}
            color="white"
            onClick={goToNextImage}
          />
        </div>
      </Media>
    </Col>
  );
};

export default ImageSlideshow;
