import React, { useState } from "react";
//  components
import "./BusinessCardPage.scss";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";
import BusinessCardTemplate from "./BisnessCardTemplate/BusinessCardTemplate";
// libraries

const BusinessCardsPage = () => {
  const [infoState, setInfostate] = useState({
    name: "ibanko",
    profession: "zaja",
    phone: "+654543",
    email: "mail@mail.com",
    extra: "",
  });

  return (
    <div>
      <Header />

      <div className="container">
        <WelcomeSection />
      </div>
      <div>
        <BusinessCardTemplate card={infoState} />
      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsPage;
