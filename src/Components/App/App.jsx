import React, { useState } from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import CvTemplatesPage from '../Pages/CvTemplatesPage/CvTemplatesPage';
import MainPage from '../Pages/MainPage/MainPage';
import BusinessCardsPage from '../Pages/BusinessCardsPage/BusinessCardsPage';

import { AppRoute } from '../../constants';
import { cvCards } from '../../data';

import './App.scss';
import BuilderPage from '../Pages/BuilderPage/BuilderPage';

function App(props) {
  const [chosenTemplate, setChosenTemplate] = useState(cvCards[0]);

  // Getting Id of a CV and pushing it to history.
  const cvClickHandler = (e, cvItem) => {
    setChosenTemplate(cvCards.find(item => item.id === cvItem.id));
    localStorage.setItem('cv', JSON.stringify(cvCards.find(item => item.id === cvItem.id)));
  };

  return (
    <HashRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE} component={MainPage} />
        <Route exact path={AppRoute.BUSINESS_CARD_TEMPLATES_PAGE}
          component={BusinessCardsPage} />
        <Route exact path={AppRoute.BUSINESS_CARD_BUILDER_PAGE}
          component={BusinessCardsBuilderPage} />

        <Route
          exact
          path={AppRoute.CV_TEMPLATES_PAGE}
          render={(props) => (
            <CvTemplatesPage
              chosenTemplate={chosenTemplate}
              cvClickHandler={cvClickHandler}
              {...props}
            />
          )}
        />
        <Route
          path='/builder/:id'
          render={(props) => (
            <BuilderPage {...props} chosenTemplate={chosenTemplate} />
          )}
        />
        <Redirect to={AppRoute.MAIN_PAGE} />
      </Switch>
    </HashRouter>
  );
}

export default App;
