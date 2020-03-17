import React from "react";
import {
  HashRouter as Router,
  Route,
  // Switch,
  Redirect
} from "react-router-dom";

import Loading from "../page/layout-loading";
import Home from "../page/layout-home";
import { AnimatedSwitch as Switch } from "react-router-transition";

export default function RouterRelation() {
  // console.log("router");
  return (
    <Router basename="/">
      <Switch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Loading} />
        <Route path="/loading" component={Loading} />
        <Route path="/home" component={Home} />
        <Redirect to="/loading" />
      </Switch>
    </Router>
  );
}
