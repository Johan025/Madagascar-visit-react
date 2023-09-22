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
                      <div className="row gy-5" id="row-princip">
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
                                    Antsirabé - Ambositra -Ranomafana
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Visit City tour in Antsirabe with local
                                    rickshaw before driving to Ranomafana. Stop
                                    at Ambositra for the lunch .Ambositra is the
                                    capital of woodcarving sculptures and
                                    carving, possibility to visit the artisan
                                    market . Continuation to Ranomafana where
                                    you will across Betsileo region, with a
                                    scenery of rice fields in terraces ,
                                    specific for this tribe. Stop along the road
                                    for having contact with the local people
                                    Night walk to spot nocturnal lemurs,
                                    chameleons & frogs. Overnight at the hotel .
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 4{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Ranomafana National Park
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Visit of the Ranomafana National Park for
                                    more wildlife of this rainforest .12species
                                    of lemurs such as golden bamboo lemur, the
                                    greater bamboo lemur ,birds, chameleons are
                                    seeing in this park without forgetting
                                    orchids, different medicinal plants.
                                    Overnight at the hotel.
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 5{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Ranomafana - Fianarantsoa - Ambalavao
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Drive Ranomafana to Ambalavao, Possibility
                                    to see the market of zebu in Ambalavao, if
                                    you arrive at Wednesday day . Ambalavao is
                                    known for the market of zebu , the first
                                    biggest market of zebu in Madagascar in each
                                    Wednesday Ambalavao is known also for the
                                    paper Antemoro. and the silk . Visiting of
                                    the craftswoman local making Antemoro
                                    paper,which is done by hand Stop along the
                                    road for having contact with the local
                                    people Overnight at the hotel.
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 6{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Ambalavao - Isalo
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Visit of ANJA reserve before going to Isalo,
                                    Anja reserve created by the local villageous
                                    for protecting the fauna,It’s a model for
                                    environmental protection .You can see
                                    specially the ring- tailed lemurs OR LEMUR
                                    CATTA , the point of view that you can see
                                    Amabalavao and his area , the medicial
                                    plants. Passing at Ihosy, the capital of the
                                    Bara tribe.Crossing through the dry and
                                    desertic landscape of the South, the land
                                    plateau of Horombe which extend as far as
                                    the eye can see. Overnight at the hotel
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 7{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Isalo
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Visit of Isalo National Park. Isalo National
                                    Park formed by a sandstone ALANA IO MOT IO
                                    massifs of ruined forms, whole day to
                                    explore the National Park, trekking through
                                    the Isalo’s canyon, natural swimming
                                    pool,the blue and black swimming pool, a
                                    refuge for lemurs such as Brown lemur,
                                    ring-tailed lemur; birds such as Benson’s
                                    rock ,Madagascar Wagtail endemic in Isalo
                                    overnight at the hotel.
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 8{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Isalo - Tuléar - Ifaty
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Drive to Ifaty , the last itinerary across
                                    the desertic scenery and the South spiny
                                    forest before entering the sunny town of
                                    Ifaty . Stop along the road for having
                                    contact with the local people Overnight at
                                    the hotel
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 9, Day 10{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Ifaty
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Drive to Ifaty , the last itinerary across
                                    the desertic scenery and the South spiny
                                    forest before entering the sunny town of
                                    Ifaty . Stop along the road for having
                                    contact with the local people Overnight at
                                    the hotel
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
                            </div>

                            <div className="col-7">
                              <div className="tour_details">
                                <div className="tour_details_title">
                                  <h1>
                                    <FontAwesomeIcon
                                      icon={faCalendarDay}
                                      id="icon"
                                    />{" "}
                                    Day 11{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Ifaty - Tuléar -Tana
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Drive to Ifaty , the last itinerary across
                                    the desertic scenery and the South spiny
                                    forest before entering the sunny town of
                                    Ifaty . Stop along the road for having
                                    contact with the local people Overnight at
                                    the hotel
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12" id="dernier-col">
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
                                    Day 12{" "}
                                  </h1>
                                  <h2>
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      id="icon"
                                    />
                                    Tana
                                  </h2>
                                  <div className="lig"></div>
                                  <p>
                                    Pick you at the aiport .City tour in Tana ,
                                    depends on your schedule for the
                                    international flight Visiting the lemur’s
                                    park , Digue’s market,market of souvenirs
                                    before your transfert to the airport for
                                    your international flight
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
