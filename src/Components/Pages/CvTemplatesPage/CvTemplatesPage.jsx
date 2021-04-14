import React from 'react';

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import WelcomeSection from '../../Common/WelcomeSection/WelcomeSection';
import './CvTemplatesPage.scss';
import CvCardList from '../../CvCardList/CvCardList';

import { motion } from 'framer-motion';
function CvTemplatesPage(props) {
  return (
    <motion.div
      initial={{ translateX: '-200%' }}
      animate={{ translateX: '0%' }}
      transition={{ type: 'tween', duration: 1, delay: 0.2 }}>
      <Header />
      <div className='cv-page'>
        <div className='container'>
          <WelcomeSection />
          <CvCardList props={props} />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default CvTemplatesPage;
