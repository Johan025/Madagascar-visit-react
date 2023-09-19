import React from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav_primary">
           
      </div>

      <div className="nav_secondary">
        <div className="logo"></div>

       

        <div className="nav_toggle">
          <ul className="d-flex m-4">
            <li><a href="">HOME</a></li>
            <li><a href="">OUR TOURS</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </div>

        <div className="version text-end">
              <h1>EN <FontAwesomeIcon icon={faSortDown} /></h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

