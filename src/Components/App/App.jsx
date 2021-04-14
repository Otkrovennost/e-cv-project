import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import CvTemplatesPage from '../Pages/CvTemplatesPage/CvTemplatesPage';
import MainPage from '../Pages/MainPage/MainPage';
import BusinessCardsPage from '../Pages/BusinessCardsPage/BusinessCardsPage';
import { AppRoute } from '../../constants';
import './App.scss';
import BuilderPage from '../Pages/BuilderPage/BuilderPage';
import { AnimatePresence } from 'framer-motion';

function App(props) {
  return (
    <HashRouter>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch>
          <Route exact path={AppRoute.MAIN_PAGE} component={MainPage} />
          <Route
            exact
            path={AppRoute.BUSINESS_CARD_TEMPLATES_PAGE}
            component={BusinessCardsPage}
          />
          <Route
            exact
            path={AppRoute.CV_TEMPLATES_PAGE}
            render={(props) => <CvTemplatesPage {...props} />}
          />
          <Route
            path='/builder/:id'
            render={(props) => <BuilderPage {...props} />}
          />
          <Redirect to={AppRoute.MAIN_PAGE} />
        </Switch>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
