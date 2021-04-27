import React, { useContext } from 'react';
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
import HelpAndTips from '../Pages/HelpAndTips/HelpAndTips';
import axios from 'axios';
import AuthPage from '../Pages/AuthPage/AuthPage';
import UnauthorizedError from '../Common/UnauthorizedError/UnauthorizedError';
import AuthContext from '../../context/AuthContext';
import Header from '../Common/Header/Header';
axios.defaults.withCredentials = true; // letting client to get cookies from the server

function App(props) {
  const { loggedIn } = useContext(AuthContext);
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
            // path={AppRoute.BUSINESS_CARD_CREATOR_PAGE}
            path="/creator/:id"
            render={(props) => <BusinessCardsCreator {...props} />}
          />
          <Route
            path="/builder/:id"
            render={(props) => <BuilderPage {...props} />}
          />
          {loggedIn === false && (
            <Route path={AppRoute.AUTH_PAGE} render={(props) => <AuthPage />} />
          )}
          <Route
            path={AppRoute.UNAUTHORIZED}
            render={(props) => <UnauthorizedError />}
          />
          <Redirect to={AppRoute.MAIN_PAGE} />
        </Switch>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
