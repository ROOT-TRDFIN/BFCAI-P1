import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CustomCursor from "./compoMain/cursorMain";
import viewMore from "../assets/ViewButton.svg"

const OurServiceData = ({ cardData }) => {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);



  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;
    const px = x / card.offsetWidth;
    const py = y / card.offsetHeight;

    setRotationY(-15 + 30 * px);
    setRotationX(15 - 30 * py);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setRotationY(0);
    setRotationX(0);
    setIsHovering(false);
  };

  return (
    <div>
         {isHovering && (
        <CustomCursor
          cursorImage={viewMore}
          cursorSize={{ width: 120, height: 120 }}
        />
      )}
    <div
      className="mouse-card"
      style={{
        transform: `perspective(1000px) rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
      }}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleMouseLeave}
    >
   

      <Link to="/serviceMain">
      
        <div
          className="mouse-content"
        
        >
          <img
            className="mouse-icons"
            src={cardData.image}
            alt={cardData.title}
          />
          <h1>{cardData.title}</h1>

          {/* <Link to="/serviceMain"><button>View More</button></Link> */}
        </div>
      </Link>
    </div>
    </div>
  );
};

// Prop validation
OurServiceData.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurServiceData;
