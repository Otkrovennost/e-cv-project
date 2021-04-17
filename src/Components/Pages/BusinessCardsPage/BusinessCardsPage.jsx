import React from "react";
import "./BusinessCardPage.scss";

import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";

import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";
import { motion } from "framer-motion";
import BusinessCardList from "./BusinessCardList/BusinessCardList";

const BusinessCardsPage = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <WelcomeSection />

        <BusinessCardList />
      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsPage;
