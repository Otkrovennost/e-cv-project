import React, {useEffect} from "react";

//  components
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";
import BusinessCardList from '../BusinessCardsPage/BusinessCardList/BusinessCardList';

import "./BusinessCardPage.scss";

function BusinessCardsPage(props) {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="businessCardsMain">
      <Header />
      <div className="container">
        <WelcomeSection />
      </div>
      <div className="businessCardsBlock">
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