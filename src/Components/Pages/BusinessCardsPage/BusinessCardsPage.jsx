import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { AppRoute } from '../../../constants';
//  components
import "./BusinessCardPage.scss";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";
import BusinessCardTemplate from "./BisnessCardTemplate/BusinessCardTemplate";
import userImage from '../../../assets/user-image.jpeg'
// libraries

const BusinessCardsPage = () => {

  const infoState = {
    name: "ivanko",
    profession: "zaja",
    phone: "+654543",
    email: "mail@mail.com",
    extra: "",
  };

  return (
    <div>
      <Header />

      <div className="container">
        <WelcomeSection />
      </div>
      <div>
        <Link
          to={AppRoute.BUSINESS_CARD_CREATOR_PAGE}>
          <img src={userImage} />
          {/* <BusinessCardTemplate card={infoState} /> */}
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsPage;
