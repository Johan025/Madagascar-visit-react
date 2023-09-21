import React from "react";
import card1 from "./../assets/SAINTE MARIE1n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Choice = () => {
  return (
    <div className="choice">
      <div className="row text-center" id="row1">
        <div className="col-12">
          <div className="title">
            <h2>Best choice</h2>
            <h1>Why to trip with us ?</h1>
          </div>
        </div>
      </div>

      <div className="row gx-5" id="row2">
        <div className="col-4">
          <div className="box text-center">
            <div className="box_image">
              <img src={card1} alt="" />
            </div>

            <div className="box_title">
              <h1>Experimented Team member</h1>
              <div className="lig"></div>
            </div>

            <div className="box_desc">
              <p>Madagascar Visit Company has an experimented Team member</p>
              <button className="btn">Book Our tours <FontAwesomeIcon icon={faArrowRight} id="icon" /></button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="box text-center">
            <div className="box_image">
              <img src={card1} alt="" />
            </div>

            <div className="box_title">
              <h1>Some Tours proposed</h1>
              <div className="lig  text-center"></div>
            </div>

            <div className="box_desc">
              <p>Madagascar Visit Company proposed you many tours for your holidays in Madagascar the Great Island</p>
              <button className="btn">Book Our tours <FontAwesomeIcon icon={faArrowRight} id="icon" /></button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="box text-center">
            <div className="box_image">
              <img src={card1} alt="" />
            </div>

            <div className="box_title">
              <h1>Have a unforgetable Trip</h1>
              <div className="lig "></div>
            </div>

            <div className="box_desc">
              <p>Have an great and unforgetable Trip with Madagascar Visit Company</p>
              <button className="btn">Book Our tours <FontAwesomeIcon icon={faArrowRight} id="icon" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
