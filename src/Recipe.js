import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import oven from "./assets/img/oven.svg";
import simmer from "./assets/img/boiling.svg";
import totalTime from "./assets/img/clock-icon.svg";
import cooking from "./assets/img/cooking.svg";
import handsOn from "./assets/img/hands-on.svg";
import foodTray from "./assets/img/food-tray.svg";
import snowflake from "./assets/img/snowflake.svg";
import "./Recipe.css";
import Navbar from "./Navbar";

function Recipe({ location }) {
  const [recipe, setRecipe] = useState(location.state);
  const recipeSteps = recipe.steps;

  const stepsList = Object.entries(recipeSteps).map(([key, value]) => {
    return (
      <li>
        <span className="stepNumber">{key}</span>

        <span className="stepInfo">{value}</span>
      </li>
    );
  });
  const recipeTips =
    recipe.notes["tips"] && recipe.notes["tips"].map(item => item);
  console.log("TCL: Recipe -> recipeTips", recipeTips);

  const recipeNeeds =
    recipe.notes["youWillAlsoNeed"] &&
    recipe.notes["youWillAlsoNeed"].map(item => item);
  console.log("TCL: Recipe -> recipeNeeds", recipeNeeds);

  return (
    <div className="recipe-main">
      <Navbar />

      <div className="recipe">
        <h1>{recipe.name}</h1>
        <div className="recipe-top">
          <div className="recipe-img">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className="recipe-info">
            <div className="recipe-info-top">
              <div className="recipe-time">
                {recipe.time.total && (
                  <span>
                    <img
                      alt={recipe.time.total}
                      src={totalTime}
                      className="recette-info-icon"
                    />
                    {recipe.time.total}
                  </span>
                )}
                {recipe.time.handsOn && (
                  <span>
                    <img
                      alt={recipe.time.handsOn}
                      src={handsOn}
                      className="recette-info-icon"
                    />
                    {recipe.time.handsOn}
                  </span>
                )}
                {recipe.time.cook && (
                  <span>
                    <img
                      alt={recipe.time.cook}
                      src={cooking}
                      className="recette-info-icon"
                    />
                    {recipe.time.cook}
                  </span>
                )}
                {recipe.time.oven && (
                  <span>
                    <img
                      alt={recipe.time.oven}
                      src={oven}
                      className="recette-info-icon"
                    />
                    {recipe.time.oven}
                  </span>
                )}
                {recipe.time.simmering && (
                  <span>
                    <img
                      alt={recipe.time.simmering}
                      src={simmer}
                      className="recette-info-icon"
                    />
                    {recipe.time.simmering}
                  </span>
                )}

                {recipe.time.cooling && (
                  <span>
                    <img
                      alt={recipe.time.cooling}
                      src={snowflake}
                      className="recette-info-icon"
                    />
                    {recipe.time.cooling}
                  </span>
                )}
              </div>
              <div className="recipe-size">
                <span>
                  <img
                    alt={recipe.servers}
                    src={foodTray}
                    className="recette-info-icon"
                  />
                  {recipe.servers}
                </span>
              </div>
            </div>
            <p>{recipe.description}</p>
          </div>
        </div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li>
                {ingredient.amount && ingredient.amount + " "}
                {ingredient.unit && ingredient.unit + " "}
                {ingredient.name && ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="extraNeed">
          <ul>
            <h3>You’ll also need… </h3>
            {recipeNeeds ? recipeNeeds.map(item => <li>{item}</li>) : []}
          </ul>
        </div>
        <div className="recipe-steps">
          <h2>Method</h2>
          <ul className="stepList">{stepsList}</ul>
        </div>
        <ul className="tips">
          <h2>delicious. tips</h2>
          {recipeTips
            ? recipeTips.map(item => (
                <li>
                  {item}
                  <br />
                  <br />
                </li>
              ))
            : []}
        </ul>
      </div>
    </div>
  );
}
export default withRouter(Recipe);
