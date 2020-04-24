import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import { Home, Meeting } from "../views";

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/:meeting"
          component={Meeting}
          name="Meeting"
        />
        <Route path="/" component={Home} name="Home" />
      </Switch>
    </Router>
  );
};

export default MainRoute;
