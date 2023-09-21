import React from "react";
import slide1 from "./../assets/couverture_1.jpg";
import Zoom from "react-reveal/Zoom";
import slide2 from "./../assets/ouest-.jpg";
import slide3 from "./../assets/tsingy1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="false">
      <div className="carousel-inner" id="inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
          <div className="carousel-caption" id="caption">
            <Zoom>
              <p>Madagascar Visit Company</p>

              <h1>Madagascar Visit for the famous  lemur Catta </h1>
            
              <button className="btn">Book our tours <FontAwesomeIcon icon={faArrowRight} id="icon" /></button>
            </Zoom>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
          <div className="carousel-caption" id="caption">
            <Zoom>
              <p>Madagascar Visit Company</p>

              <h1>Madagascar Travel for the Alley of Baobab in the Weast </h1>
            
              <button className="btn">Book our tours <FontAwesomeIcon icon={faArrowRight} id="icon" /></button>
            </Zoom>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
          <div className="carousel-caption" id="caption">
            <Zoom>
              <p>Madagascar Visit Company</p>

              <h1>Madagascar Trip to the Tsingy of Bemaraha </h1>
            
            <button className="btn">Book our tours <FontAwesomeIcon icon={faArrowRight} id="icon" /></button>
            </Zoom>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
