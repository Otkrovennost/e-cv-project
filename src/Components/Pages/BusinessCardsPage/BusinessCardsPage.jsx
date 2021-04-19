import React from "react";

//  components
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";
import BusinessCardList from '../BusinessCardsPage/BusinessCardList/BusinessCardList';

import "./BusinessCardPage.scss";

function BusinessCardsPage(props) {


  return (
    <div>
      <Header />
      <div className="container">
        <WelcomeSection />
      </div>
      <div>
        <div className="container">
          <BusinessCardList
            props={props}
          />
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsPage;