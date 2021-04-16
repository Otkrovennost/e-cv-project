import React from 'react';
import './App.scss';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import { AppRoute } from '../../constants';
import './App.scss';
import { AnimatePresence } from 'framer-motion';
//components
import BuilderPage from '../Pages/BuilderPage/BuilderPage';
import BusinessCardsPage from '../Pages/BusinessCardsPage/BusinessCardsPage';
import BusinessCardsCreator from '../Pages/BusinessCardsPage/BusinessCardCreator/BusinessCardCreator';
import CvTemplatesPage from '../Pages/CvTemplatesPage/CvTemplatesPage';
import MainPage from '../Pages/MainPage/MainPage';



function App(props) {
  return (
    <HashRouter>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch>
          <Route exact path={AppRoute.MAIN_PAGE} component={MainPage} />
          <Route

            path={AppRoute.CV_TEMPLATES_PAGE}
            render={(props) => <CvTemplatesPage {...props} />}
          />
          <Route
            path={AppRoute.BUSINESS_CARD_PAGE}
            render={(props) => <BusinessCardsPage {...props} />}
          />
          <Route
            path={AppRoute.BUSINESS_CARD_CREATOR_PAGE}
            render={(props) => <BusinessCardsCreator {...props} />}
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
