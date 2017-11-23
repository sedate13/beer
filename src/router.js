import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";

import Random from "./components/FavoritesList/Random";
import Favorites from "./components/Profile/Favorites";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/random" component={Random} />
    <Route path="/Favorites" component={Favorites} />
  </Switch>
);
