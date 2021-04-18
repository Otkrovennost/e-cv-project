import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.jsx';
import './index.scss';
import CardsContext from './context/CvContext';
import BusinessCardsContext from './context/BusinessCardContext';

ReactDOM.render(
  <CardsContext>
    <BusinessCardsContext>
      <App />
    </BusinessCardsContext>
  </CardsContext>,
  document.getElementById('root')
);
