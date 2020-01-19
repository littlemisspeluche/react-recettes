import React, { useState, useEffect } from "react";

import "./Home.css";
import Icons from "./Icons.js";
import searchIcon from "./assets/img/search-icon.svg";
import allRestaurantsArrows from "./assets/img/all-restaurants-arrows.svg";
// import x from "./assets/img/x.svg";
// import xWhite from "./assets/img/x-white.svg";
// import clockIcon from "./assets/img/clock-icon.svg";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import { default as recipeData } from "./recettes.json";

import SignatureDish from "./SignatureDish";
import ChefOfTheWeek from "./ChefOfTheWeek";

function Home() {
  const { recipes } = recipeData;
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    setRecipeList(recipes);
  }, []);
  // LEEK AND BACON FLAMICHE
  // CHEESE AND SHALLOT PASTRIES
  // MUSSELS MOUCLADE
  return (
    <div className="container">
      <Navbar />
      <div className="main-div">
        <div className="search">
          <div className="title">
            Epicure works with the top chef restaurants
          </div>
          <div className="search-field">
            <img src={searchIcon} className="search-icon" alt="search-icon" />
            <input
              className="search-field-input"
              type="text"
              placeholder="search for restaurant, chef or recipe"
            />
          </div>
        </div>
      </div>

      <div className="popular-restaurant">
        <h3></h3>
        {/* display loading spinner when fetching data */}
        {/* <app-loading-spinner className="spinner"></app-loading-spinner> */}
        <div className="popular-container">
          <div className="cards-popular">
            {/* <div className="card-popular">
              <div className="popular-top">
                <img
                  src={chefs[0].restaurant.menu[1].image}
                  className="popular-img"
                />
              </div>

              <div className="popular-bottom">
                <h3 className="title">{chefs[0].restaurant.menu[1].name}</h3>
                <span className="name">{chefs[0].restaurant.name}</span>
                <br />
                <span className="name">{chefs[0].restaurant.shortAddress}</span>
              </div>
            </div>

            <div className="card-popular">
              <div className="popular-top">
                <img
                  src={chefs[2].restaurant.menu[1].image}
                  className="popular-img"
                />
              </div>

              <div className="popular-bottom">
                <h3 className="title">{chefs[2].restaurant.menu[1].name}</h3>
                <span className="name">{chefs[2].restaurant.name}</span>
                <br />
                <span className="name">{chefs[2].restaurant.shortAddress}</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="all-restaurants">
          <h3></h3>
          <img
            src={allRestaurantsArrows}
            className="arrow-icon"
            alt="arrow-icon"
          />
        </div>
      </div>
      <SignatureDish />
      <ChefOfTheWeek />
      <Icons />
      <div className="chef-restaurants">
        <h3></h3>
        <div className="restaurants-container"></div>
      </div>

      <AboutUs />
    </div>
  );
}
export default withRouter(Home);
