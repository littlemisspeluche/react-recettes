import React, { useState, useEffect } from "react";
import handsOn from "./assets/img/hands-on.svg";
import oven from "./assets/img/oven.svg";
import simmer from "./assets/img/boiling.svg";
import snowflake from "./assets/img/snowflake.svg";
import totalTime from "./assets/img/clock-icon.svg";
import cooking from "./assets/img/cooking.svg";
import "./RecipeCard.css";
import { Redirect } from "react-router-dom";

export default function RecipeCard({ recette }) {
  const [redirect, setRedirect] = useState(false);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(recette);
  }, [recette]);

  let path = `/recipes/recipe/${recette.id}`;

  return (
    <div
      className="recette-card"
      onClick={() => {
        setRedirect(true);
      }}
    >
      <div className="recette-card-top">
        <img src={recette.image} alt={recette.name} />
      </div>
      <div className="recette-card-bottom">
        <h3 className="title">{recette.name}</h3>
        <ul>
          {recette.time.total && (
            <li>
              <img
                src={totalTime}
                className="recette-info-icon"
                alt={recette.time.total}
              />
              {recette.time.total}
            </li>
          )}
          {recette.time.handsOn && (
            <li>
              <img
                src={handsOn}
                className="recette-info-icon"
                alt={recette.time.handsOn}
              />
              {recette.time.handsOn}
            </li>
          )}
          {recette.time.cook && (
            <li>
              <img
                src={cooking}
                className="recette-info-icon"
                alt={recette.time.cook}
              />
              {recette.time.cook}
            </li>
          )}
          {recette.time.oven && (
            <li>
              <img
                src={oven}
                className="recette-info-icon"
                alt={recette.time.oven}
              />
              {recette.time.oven}
            </li>
          )}
          {recette.time.simmering && (
            <li>
              <img
                src={simmer}
                className="recette-info-icon"
                alt={recette.time.simmering}
              />
              {recette.time.simmering}
            </li>
          )}
          {recette.time.cooling && (
            <li>
              <img
                src={snowflake}
                className="recette-info-icon"
                alt={recette.time.cooling}
              />
              {recette.time.cooling}
            </li>
          )}
        </ul>
      </div>
      {redirect && (
        <Redirect
          to={{
            pathname: path,
            state: recipe
          }}
        />
      )}
    </div>
  );
}

{
  /* 
        <div className="main" style={{ position: "relative", padding: "20px" }}>
        <div className="recipe-container">
        <div className="recipe-card">
          <div className="recipe-img" style={{ width: "100%" }}>
            <img
              src={recette.image}
              alt={recette.name}
              style={{ width: "50%" }}
            />
          </div>
          <div className="recipe-details">
            <h2>Ingredients</h2>
            <ul>
              {recette.ingredients.map(ingredient => (
                <li>
                  {ingredient.amount +
                    " " +
                    ingredient.unit +
                    " " +
                    ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> 
   </div> */
}
