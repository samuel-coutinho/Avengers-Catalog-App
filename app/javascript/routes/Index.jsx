import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Avengers from "../components/Avengers";
import Avenger from "../components/Avenger";
import NewAvenger from "../components/NewAvenger";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/avengers" exact component={Avengers} />
      <Route path="/avenger/:id" exact component={Avenger} />
      <Route path="/avenger" exact component={NewAvenger} />
    </Switch>
  </Router>
);