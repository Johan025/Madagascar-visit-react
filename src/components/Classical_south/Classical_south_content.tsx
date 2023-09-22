import React from "react";
import south from "./../../assets/fenetre.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
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

                  <div className="itinerary">
                    <div className="container">
                      <div className="row gy-5" id="row-princip">git add
                        <div className="col-12">
                          <div className="row row-child" id="row-child">
                            <div className="col-5">
                              <div className="image">
                                <img src={south} alt="" />
                              </div>

                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 1{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Antananarivo
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Assistance at the airport, and transfer to
                                    the hotel. If you have time, going to the
                                    point of view that you can see Antananarivo
                                    and his area Overnight at the hotel
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="row row-child" id="row-child">
                            <div className="col-5">
                              <div className="image">
                                <img src={south} alt="" />
                              </div>

                              <div className="details">
                                <div className="details_title"></div>

                                <div className="details_lig"></div>
                              </div>
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 2{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Tana- Antsirabé
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Assistance at the airport, and transfer to
                                    Drive to Antsirabe across the highland
                                    sceneries, traditional red clay house of
                                    highland, to reach the town of Antsirabe
                                    which means a place of much salt Antsirabe ,
                                    a town of water for its thermal source
                                    ,spring water .Antsirabe is also a capital
                                    of rickshaws Overnight at the hotel.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="row row-child" id="row-child">
                            <div className="col-5">
                              <div className="image">
                                <img src={south} alt="" />
                              </div>

                              <div className="details">
                                <div className="details_title"></div>

                                <div className="details_lig"></div>
                              </div>
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                     Day 3{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Antananarivo
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Assistance at the airport, and transfer to
                                    the hotel. If you have time, going to the
                                    point of view that you can see Antananarivo
                                    and his area Overnight at the hotel
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                  
                      </div>
                    </div>
                  </div>
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
