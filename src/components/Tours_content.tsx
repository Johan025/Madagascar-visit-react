import React from "react";
import weast from "./../assets/ouest-.jpg";
import south from "./../assets/fenetre.jpg";
import north from "./../assets/couvertureNord.jpg";
import est from "./../assets/SIFAKA.jpg";
import aventures from "./../assets/Baobabs-andavadaoka.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Tours_content = () => {
  return (
    <div className="tours_content">
      <div className="row" id="row1">
        <div className="col-12">
          <div className="title text-center">
            <h2>Our tours</h2>
            <h1>Discover Madagascar with our features tours</h1>
          </div>

          <div className="row gy-4" id="row2">
             
            <div className="col-4">
              <div className="box text-center">
                <div className="box_image">
                  <img src={weast} alt="" />
                </div>

                <div className="box_content">
                  <div className="title">
                    <h1>
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} id="icon" /> Weast
                      Tour
                    </h1>
                  </div>

                  <div className="desc mt-3">
                    <p>
                      Trip to  the Weast of Madagascar , enjoy many places like
                      the Alley of Baobab in Morondava
                    </p>
                    <button className="btn text-center mt-2">
                      More details      <FontAwesomeIcon icon={faArrowRight} id="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="box text-center">
                <div className="box_image">
                  <img src={south} alt="" />
                </div>

                <div className="box_content">
                  <div className="title">
                    <h1>
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} id="icon" /> South
                      Tour
                    </h1>
                  </div>

                  <div className="desc mt-3">
                    <p>
                      Trip to the South of Madagascar and discover some exotic places in
                      the Big south  like Isalo places
                    </p>
                    <Link to="/tours/south-anglais"><button className="btn text-center mt-2">
                      More details <FontAwesomeIcon icon={faArrowRight} id="icon" />
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="box text-center">
                <div className="box_image">
                  <img src={north} alt="" />
                </div>

                <div className="box_content">
                  <div className="title">
                    <h1>
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} id="icon" /> North
                      Tour
                    </h1>
                  </div>

                  <div className="desc mt-3">
                    <p>
                      Reserve a holidays to the North of Madagascar and discover
                      some exotic places like Nosy-Be Island
                    </p>
                    <button className="btn text-center mt-2">
                      More details <FontAwesomeIcon icon={faArrowRight} id="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="box text-center">
                <div className="box_image">
                  <img src={est} alt="" />
                </div>

                <div className="box_content">
                  <div className="title">
                    <h1>
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} id="icon" /> East
                      Tour
                    </h1>
                  </div>

                  <div className="desc mt-3">
                    <p>
                       Travel to Madagascar to the east Part to discover  endemic species and places like  the lemur Sifaka 
                    </p>
                    <button className="btn text-center mt-2">
                      More details <FontAwesomeIcon icon={faArrowRight} id="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="box text-center">
                <div className="box_image">
                  <img src={aventures} alt="" />
                </div>

                <div className="box_content">
                  <div className="title">
                    <h1>
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} id="icon" /> Adventures
                      Tour
                    </h1>
                  </div>

                  <div className="desc mt-3">
                    <p>
                       Make a trip with the Adventures tour of Madagascar , you will visit exotic places 
                    </p>
                    <button className="btn text-center mt-2">
                      More details <FontAwesomeIcon icon={faArrowRight} id="icon" />
                    </button>
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

export default Tours_content;

