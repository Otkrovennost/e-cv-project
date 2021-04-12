import React, {useEffect} from 'react'

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import WelcomeSection from '../../Common/WelcomeSection/WelcomeSection'
import "./CvTemplatesPage.scss"
import CvCardList from "../../CvCardList/CvCardList"

function CvTemplatesPage(props) {
  return (
    <>
      <Header />
      <div className="cv-page">
        <div className="container">
          <WelcomeSection />
          <CvCardList props={props} cvClickHandler={props.cvClickHandler}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CvTemplatesPage;
