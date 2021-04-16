import React, { useState } from 'react';
//  components
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import WelcomeSection from '../../Common/WelcomeSection/WelcomeSection';
import BusinessCardTemplate from './BisnessCardTemplate/BusinessCardTemplate';
// libraries 
import { motion } from 'framer-motion';




const BusinessCardsPage = () => {
  const [infoState, setInfostate] = useState(
    {
      name: 'ibanko',
      profession: 'zaja',
      phone: '+654543',
      email: 'mail@mail.com',
      extra: ''
    }
  )


  return (
    <motion.div
      initial={{ translateX: '200%' }}
      animate={{ translateX: '0%' }}
      transition={{ type: 'tween', duration: 1 }}>

      <Header />

      <div className='container'>
        <WelcomeSection />

        <BusinessCardTemplate
          card={infoState}
        />

      </div>
      <Footer />
    </motion.div>
  );
};
export default BusinessCardsPage;
