import React from "react";
import Navbar_tours from "../../components/Navbar_tours";
import fenter from "./../../assets/fenetre.jpg";
import Zoom from "react-reveal/Zoom";

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
                different tribes. <br /> <br /> SOUTH TOUR gives you opportunity to pass
                through the rainforest ; Ranomafana national park ; Manakara
                along the evergreen landscape ,with the excursion in the
                Pangalane’s channel; to have an experience with the train
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
             <div className="col-12">
                <div className="title">
                <h1> Avalaible tour in South</h1>
              <div className="lig"></div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default South_welcome;
