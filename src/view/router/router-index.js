import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loading from "../page/layout-loading";
import Home from "../page/layout-home";
import Font from "../page/layout-font";
import Test from "./../page/layout-class";

export default function RouterRelation() {
  let baseHash = "";
  return (
    <Router basename="/">
      <Switch>
        <Route exact path={baseHash + "/"} component={Loading} />
        <Route path={baseHash + "/loading"} component={Loading} />
        <Route path={baseHash + "/home"} component={Home} />
        <Route path={baseHash + "/font"} component={Font} />
        <Route path={baseHash + "/test"} component={Test} />
        <Redirect to={baseHash + "/loading"} />
      </Switch>
    </Router>
  );
}
