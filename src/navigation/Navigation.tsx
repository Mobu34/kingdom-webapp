import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as S from "../screens";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <S.Details />
        </Route>
        <Route path="/">
          <S.Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
