import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.jsx';
import './index.scss';
import CardsContext from './Components/context/CvContext';

ReactDOM.render(
  <CardsContext>
    <App />
  </CardsContext>,
  document.getElementById('root')
);
