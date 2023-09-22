import React from "react";
import Navbar_tours from "../../components/Navbar_tours";
import fenter from "./../../assets/fenetre.jpg";
import Zoom from "react-reveal/Zoom";
import weast from "./../../assets/ouest-.jpg";
import south from "./../../assets/fenetre.jpg";
import north from "./../../assets/couvertureNord.jpg";
import est from "./../../assets/SIFAKA.jpg";
import aventures from "./../assets/Baobabs-andavadaoka.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const South_welcome = () => {
  return (
    <div className="south_welcome">
      <Navbar_tours />

      <div className="South_welcome_content">
        <div className="row" id="couv">
          <div className="col-12">
            <div className="image">
              <img src={fenter} alt="" className="w-100" />
            </div>

            <div className="col-12">
              <div className="title text-center">
                <Zoom>
                  <h2>South Tour</h2>
                  <h1>Madagascar Tour for the Lemur Catta</h1>
                </Zoom>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="desc">
          <div className="col-12">
            <div className="title">
              <h1> South Trip details</h1>
              <div className="lig"></div>
            </div>

            <div className="desc">
              <p>
                SOUTH TOUR IN MADAGASCAR is done along the national road 7, this
                tour is one of the most popular destinations by visitors since
                it offers the best and variety of scenery across the mountains,
                the rice field in terrace, valleys, forest, canyon ; different
                National park ; and different cultures as you will pass through
                different tribes. <br /> <br /> SOUTH TOUR gives you opportunity
                to pass through the rainforest ; Ranomafana national park ;
                Manakara along the evergreen landscape ,with the excursion in
                the Pangalane’s channel; to have an experience with the train
                Fianarantsoa until Manakara ;to visit the zafimaniry’s village
                reputed of hability of woodcarving; not forgetting the mountain
                hiking in Andringitra National park , which you can reach BOBY’S
                PEAK, the 2nd mountain highest in Madagascar , and trekking in
                the tsaranoro’s valley. Circuit can be modified according to
                your choice .
              </p>
            </div>
          </div>
        </div>

        <div className="row" id="tours">
          <div className="row" id="row1">
            <div className="col-12">
              <div className="title">
                <h1> Avalaible tours in the South</h1>
                <div className="lig"></div>
              </div>
            </div>

            <div className="container">
              <div className="row text-center" id="row2">
                <div className="col-4">
                  <div className="box text-start">
                    <div className="box_image">
                      <img src={south} alt="" />
                      <div className="date">
                        <h1>
                          {" "}
                          <FontAwesomeIcon icon={faClock} id="icon" /> 12 days
                        </h1>
                      </div>
                    </div>

                    <div className="box_content">
                      <div className="title1">
                        <h1>The Classical South Tour</h1>
                      </div>

                      <div className="desc mt-3">
                        <button className="btn text-center mt-2">
                          Book Now{" "}
                          <FontAwesomeIcon icon={faArrowRight} id="icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="box text-start">
                    <div className="box_image">
                    <img src={south} alt="" />
                      <div className="date">
                        <h1>
                          {" "}
                          <FontAwesomeIcon icon={faClock} id="icon" /> 15 days
                        </h1>
                      </div>
                    </div>

                    <div className="box_content">
                      <div className="title1">
                        <h1> Classical South combined with Train</h1>
                      </div>

                      <div className="desc mt-3">
                        <button className="btn text-center mt-2">
                          Book Now{" "}
                          <FontAwesomeIcon icon={faArrowRight} id="icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="box text-start">
                    <div className="box_image">
                    <img src={south} alt="" />
                      <div className="date">
                        <h1>
                          {" "}
                          <FontAwesomeIcon icon={faClock} id="icon" /> 15 days
                        </h1>
                      </div>
                    </div>

                    <div className="box_content">
                      <div className="title1">
                        <h1>Adventures tours : <br /> Andringitra National park</h1>
                      </div>

                      <div className="desc mt-3">
                        <button className="btn text-center mt-2">
                          Book Now{" "}
                          <FontAwesomeIcon icon={faArrowRight} id="icon" />
                        </button>
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
  );
};

export default South_welcome;
