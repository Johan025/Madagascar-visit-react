import React from "react";
import south from "./../../assets/fenetre.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Classical_south_content: React.FC = () => {
  return (
    <div className="classical_south_content">
      <div className="app-container">
        <div className="container">
          <div className="row g-4">
            <div className="col-8">
              <div className="main-contain">
                <div className="row" id="part-1">
                  <div className="col-12">
                    <div className="image">
                      <img src={south} alt="" />
                    </div>

                    <div className="title">
                      <div className="title_1">
                        <h1>Classical South Tour</h1>
                      </div>

                      <div className="title_2 mt-3 d-flex">
                        <div className="duration">
                          <h1>
                            <FontAwesomeIcon icon={faClock} id="icon" /> 12 Days
                          </h1>
                        </div>

                        <div className="location">
                          <h1>
                            <FontAwesomeIcon icon={faLocationDot} id="icon" />{" "}
                            Antananarivo - Tuléar
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row" id="part-2">
                      <div className="choice d-flex justify-content-center">
                            <h3 className="active">Itinerary</h3>
                            <h3>Activity</h3>
                            <h3>Gallery</h3>

                          
                      </div>
                      <div className="lig"></div>
                       
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="main-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classical_south_content;
