import React from 'react';

import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import WelcomeSection from '../../Common/WelcomeSection/WelcomeSection';
import { motion } from 'framer-motion';

const BusinessCardsPage = () => {
  return (
    <motion.div
      initial={{ translateX: '200%' }}
      animate={{ translateX: '0%' }}
      transition={{ type: 'tween', duration: 1 }}>
      <Header />

      <div className='container'>
        <WelcomeSection />
      </div>
      <Footer />
    </motion.div>
  );
};
export default BusinessCardsPage;
