import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import CvTemplatesPage from "../Pages/CvTemplatesPage/CvTemplatesPage";
import MainPage from "../Pages/MainPage/MainPage";

import { AppRoute } from "../../constants";

import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE} component={MainPage} />
        <Route
          exact
          path={AppRoute.CV_TEMPLATES_PAGE}
          component={CvTemplatesPage}
        />
        <Redirect to={AppRoute.MAIN_PAGE} />
      </Switch>
    </HashRouter>
  );
}

export default App;
