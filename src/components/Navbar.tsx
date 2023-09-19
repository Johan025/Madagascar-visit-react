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
            <li><a href=""><FontAwesomeIcon icon={faHome} className="icon"/> HOME</a></li>
            <li><a href=""><FontAwesomeIcon icon={faCar} /> OUR TOURS</a></li>
            <li><a href=""> <FontAwesomeIcon icon={faNewspaper} /> BLOG</a></li>
            <li><a href=""> <FontAwesomeIcon icon={faBook} /> GUESTBOOK</a></li>
            <li className="contact"><a href=""><FontAwesomeIcon icon={faEnvelope} className="icon"/> CONTACT</a></li>
          </ul>
        </div>

      
      </div>
    </div>
  );
};

export default Navbar;

