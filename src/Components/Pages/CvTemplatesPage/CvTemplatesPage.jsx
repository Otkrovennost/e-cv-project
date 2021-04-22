import React from "react";

import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import WelcomeSection from "../../Common/WelcomeSection/WelcomeSection";
import "./CvTemplatesPage.scss";
import CvCardList from "../../CvCardList/CvCardList";

import { motion } from "framer-motion";
function CvTemplatesPage(props) {
  return (
    <motion.div className="cv-page">
      <Header />
      <div>
        <div className="container">
          <WelcomeSection />
          <CvCardList props={props} />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default CvTemplatesPage;
