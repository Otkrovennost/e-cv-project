import React from 'react';
import './BusinessCardPage.scss'


import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import WelcomeSection from '../../Common/WelcomeSection/WelcomeSection'
import BusinessCardList from './BusinessCardList/BusinessCardList'

const BusinessCardsPage = () => {

  return (
    <div className="BusinessCardsPage">
      <Header />
      <div className="">
        <WelcomeSection />
      </div>
      <div>
        <BusinessCardList />
      </div>
      <Footer />
    </div>

  )
}
export default BusinessCardsPage;