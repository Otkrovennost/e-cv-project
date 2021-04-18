import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { AppRoute } from '../../../constants';
//  components
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";

import cardImage from '../../../assets/card-img.png';

// libraries

import "./BusinessCardPage.scss";

const BusinessCardsPage = () => {

  return (
    <div>
      <Header />

      <div className="container">
        <WelcomeSection />
      </div>
      <div>
        <div className="container">
          <ul className="card__list">
            <li className="card__item">
              <div className="card__body">
                <Link
                  to={AppRoute.BUSINESS_CARD_CREATOR_PAGE}
                >
                  <img className="card__img" src={cardImage} alt="Preview business card" />
                </Link>
              </div>
            </li>
            <li className="card__item">
              <div className="card__body">
                <img className="card__img" src={cardImage} alt="Preview business card" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsPage;
