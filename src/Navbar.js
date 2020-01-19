import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "./assets/img/logo.png";
import bagIcon from "./assets/img/bag-icon.svg";
import userIcon from "./assets/img/user-icon.svg";
import hamburgerIcon from "./assets/img/hamburger.svg";

export default function Navbar() {
  return (
    // navigation items will display here only on mobile
    //    <div className="middle-container">
    //     <div className="btns-container">
    //       <button className="chef-btn item-btn">chefs</button>
    //       <button className="rest-btn item-btn">restaurants</button>
    //     </div>
    //   </div>

    <div className="menu-container">
      <div className="left-subcontainer">
        <img src={hamburgerIcon} className="hamburger-icon" />

        <img src={logo} className="logo" />
        <h3 className="navigation-item">Epicure</h3>
        <button className="navigation-item nobtnstyle">Restaurants</button>
        <button className="navigation-item nobtnstyle">Chefs</button>
        <button className="navigation-item nobtnstyle">
          <Link to="/recipes">Recipes</Link>
        </button>
      </div>
      <div className="right-subcontainer">
        {/* <div class="search-field">
            <img src={searchIcon} class="search-icon" />
            <input type="text" class="search-input" placeholder="" />
          </div> */}

        {/* <img src={searchIcon} class="search-icon" /> */}
        <img src={userIcon} alt="go to user profile" className="user-icon" />
        <img src={bagIcon} alt="go to bag" className="bag-icon" />
      </div>
    </div>
  );
}
