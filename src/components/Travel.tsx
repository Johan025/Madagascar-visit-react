import React, { useState } from "react";
import travel_1 from "./../assets/SAINTE MARIE2.jpg";
import travel_2 from "./../assets/famadihana (1).jpg";
import travel_3 from "./../assets/couvertureNord.jpg";

const Travel: React.FC = () => {
  const [up, setUp] = useState<boolean>(false);
  const [up1, setUp1] = useState<boolean>(false);
  const [up2, setUp2] = useState<boolean>(false);

  const MouseHover = () => {
    setUp(true);
  };
  const MouseHover1 = () => {
    setUp1(true);
  };
  const MouseHover2 = () => {
    setUp2(true);
  };

  const MouseOut = () => {
    setUp(false);
  };
  const MouseOut1 = () => {
    setUp1(false);
  };
  const MouseOut2 = () => {
    setUp2(false);
  };

  return (
    <div className="travel">
      <div className="row text-center" id="row1">
        <div className="col-12">
          <div className="title">
            <h2>The Great Island</h2>
            <h1>What,you will see in Madagascar?</h1>
          </div>
        </div>
      </div>

      <div className="row gx-5 text-center" id="row2">
        <div className="col-4">
          <div className="box">
            <div className="box_image">
              <img src={travel_1} alt="" />
            </div>

            <div
              className={`box_content ${up ? "open" : "close"}`}
              onMouseEnter={MouseHover}
              onMouseLeave={MouseOut}
            >
              <div className="title">
                <h1>Endemic species</h1>
                <div className="lig"></div>
              </div>

              <div className="desc">
                <p>
                  You will discover a lot of species like whare in Nosy-Be and
                  Sainte-Marie
                </p>
                <button className="btn">Book Our tours</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="box">
            <div className="box_image">
              <img src={travel_2} alt="" />
            </div>

            <div
              className={`box_content ${up1 ? "open" : "close"}`}
              onMouseEnter={MouseHover1}
              onMouseLeave={MouseOut1}
            >
              <div className="title">
                <h1>Culture and custom</h1>
                <div className="lig"></div>
              </div>

              <div className="desc">
                <p>
                  Trip to Madagascar to discover the culture and custom of Malagasy
                  People{" "}
                </p>
                <button className="btn">Book Our tours</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="box">
            <div className="box_image">
              <img src={travel_3} alt="" />
            </div>

            <div
              className={`box_content ${up2 ? "open" : "close"}`}
              onMouseEnter={MouseHover2}
              onMouseLeave={MouseOut2}
            >
              <div className="title">
                <h1>Spendid beach</h1>
                <div className="lig"></div>
              </div>

              <div className="desc">
                <p>
                  Reserve your trip to see exotic beach of Madagascar like Nosy
                  Iranja Beach
                </p>
                <button className="btn">Book Our tours</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
