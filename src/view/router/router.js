import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Loading from "./../page/loading";
import Home from "./../page/home";
import Hooks from "../page/hooks";
import Demo from "./../page/demo";
export default function RouterRelation() {
  // console.log("router");
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/loading" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/demo" component={Demo} />
        <Redirect to="/loading" />
      </Switch>
    </Router>
  );
}

