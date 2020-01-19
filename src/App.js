import React from "react";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/recipes" component={RecipeList} exact />
      <Route path="/recipes/recipe/:id" component={Recipe} />
    </Switch>
  );
}

export default App;
