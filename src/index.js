import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.jsx';
import './index.scss';
import CardsContext from './context/CvContext';
import BusinessCardsContext from './context/BusinessCardContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <AuthContextProvider>
    <CardsContext>
      <BusinessCardsContext>
        <App />
      </BusinessCardsContext>
    </CardsContext>
  </AuthContextProvider>,
  document.getElementById('root')
);
