import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";

export const Routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/recipes" component={RecipeList} />
    <Route path="/recipe" component={Recipe} />
  </div>
);
