import React from "react";
import image_about from "./../assets/about_518x389.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="profil">
              <img src={image_about} alt="" />
            </div>
          </div>

          <div className="col-6">
            <div className="row" id="title">
              <div className="title">
                <h2>Who are us ?</h2>
                <h1>We are a local Tour Guide</h1>
                <p className="mt-4">
                  MADAGASCAR VISIT COMPANY is a local tour guid in Madagascar,
                  lead by Johanna EMADISSON for your travel, tour and holidays
                  in Madagascar, It's a real pleasure for us to guid you through
                  our country, to make your visit and your stay confortable and
                  unforgettable. Madagascar, hotpot of biodiversity, so, if you
                  like fauna and flora, baobabs, Lemurs, chameleon, birds,
                  beautiful scenery, beach, people. Madagascar Visit Company
                  offers you a tourisme exclusive, a birding tour, adventure
                  tour in Tsingy de Bemaraha, along the coast Because we are an
                  ambassador of our country . Our goal, with my teamworks, the
                  driverguids, guids, boatmens, porters, are to share with you,
                  the love of our country and to give you satisfaction during
                  your holidays, that's you will have an unforgettable good
                  memories of Madagascar And it's a privilege for us to run a
                  sustainable and responsable tourism to leave this unique and
                  irreaplacable wildlife to the future generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
