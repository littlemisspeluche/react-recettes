import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import Navbar from "./Navbar";

import "./RecipeList.css";
import { default as data } from "./recettes.json";
import RecipeCard from "./RecipeCard";
import searchIcon from "./assets/img/search-icon.svg";

export default function RecipeList() {
  const { recipes } = data;
  const [recipeList, setRecipeList] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setRecipeList(recipes);
  }, []);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  console.log("TCL: RecipeList -> filteredRecipes", filteredRecipes);

  const lowercasedFilter = userInput.toLowerCase();

  const filtered = _.filter(recipeList, function({ name, ingredients }) {
    const filteredRecpieNames =
      name.toLowerCase().indexOf(lowercasedFilter) > -1;
    if (filteredRecpieNames) {
      return filteredRecpieNames;
    } else {
      const filteredIngredientsName = _.filter(ingredients, function({ name }) {
        const filteredIngredients =
          name.toLowerCase().indexOf(lowercasedFilter) > -1;

        return filteredIngredients;
      });
      if (filteredIngredientsName.length > 0) {
        return filteredIngredientsName;
      }
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Container className="search-field">
        <InputGroup className="mb-3 form-group w-50">
          <img src={searchIcon} className="search-icon search-recipe" alt="search-icon" />

          <FormControl
            className="search-input"
            type="text"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-small"
            placeholder="Search for recipe, ingredient"
            onChange={event => {
              setUserInput(event.target.value);
              setFilteredRecipes(filtered);
            }}
          />
        </InputGroup>
      </Container>

      <div className="item-list">
        {filteredRecipes.map(recipe => (
          <RecipeCard recette={recipe} />
        ))}
      </div>
    </div>
  );
}
