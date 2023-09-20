import React from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSortDown } from "@fortawesome/free-solid-svg-icons";
 import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 import { faPhone } from "@fortawesome/free-solid-svg-icons";
 import { faHome } from "@fortawesome/free-solid-svg-icons";
 import { faCar } from '@fortawesome/free-solid-svg-icons';
 import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
 import { faBook } from '@fortawesome/free-solid-svg-icons';
 import fb from "./../assets/facebook (1).png"
 import tp from "./../assets/tripadvisor.png"
 import lk from "./../assets/linkedin (1).png"
 import logo from "./../assets/madagascar-visite-ico.png"
 import {Link} from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav_primary">
           <div className="icones d-flex justify-content-center">
                  <div className="email">
                 
                  <h1> <FontAwesomeIcon icon={faEnvelope} className="email_icone" /> Lovasson@yahoo.fr </h1>
                 
                  </div>

                  <div className="phone">
                  <h1> <FontAwesomeIcon icon={faPhone} /> 0347344045</h1>
                  </div>

                  <div className="reseaux_sociaux">
                      <img src={fb} alt="" />
                      <img src={tp} alt="" />
                      <img src={lk} alt="" />
                  </div>

                  <div className="version">
                    <h1>EN <FontAwesomeIcon icon={faSortDown} /></h1>
                 </div>

                  
           </div>
      </div>

      <div className="nav_secondary">
        <div className="logo d-flex">

            <img src={logo} alt="" />
            <h1>Madagascar<span>Visit</span></h1>
        </div>

        <div className="nav_toggle">
          <ul className="d-flex m-4 justify-content-end">
            <li><Link to="/" className="a" id="active"><FontAwesomeIcon icon={faHome} className="icon"/> HOME</Link></li>
            <li><Link to="/tours" className="a"><FontAwesomeIcon icon={faCar} className="icon"/> OUR TOURS</Link></li>
            <li><Link to="/" className="a"><FontAwesomeIcon icon={faNewspaper} className="icon"/> BLOG</Link></li>
            <li><Link to="/" className="a"><FontAwesomeIcon icon={faBook} className="icon"/> GUESTBOOK</Link></li>
            <li className="contact"><Link to="/" className="a"><FontAwesomeIcon icon={faEnvelope} className="icon"/> CONTACT</Link></li>
          </ul>
        </div>

      
      </div>
    </div>
  );
};

export default Navbar;

