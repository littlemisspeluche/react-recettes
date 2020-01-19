import React from "react";
import vegetarianIcon from "./assets/img/vegetarian.svg";
import veganIcon from "./assets/img/vegan-icon.svg";
import spicyIcon from "./assets/img/spicy-icon.svg";
import "./Icons.css";

export default function Icons() {
  return (
    <div className="menu-icons">
      <div className="menu-column">
        <h3>MEANING OF OUR ICONS</h3>
        <br />
        <div className="icons">
          <div>
            <img src={spicyIcon} className="spicy-icon" alt="spicy-icon" />
          </div>
          <div>
            <img
              src={vegetarianIcon}
              className="vegetarian-icon"
              alt="vegetarian-icon"
            />
          </div>
          <div>
            <img src={veganIcon} className="vegan-icon" alt="vegan-icon" />
          </div>
        </div>
        <div className="icons-name">
          <div>
            <span>Spicy</span>
          </div>
          <div>
            <span>Vegetarian</span>
          </div>
          <div>
            <span>vegan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
