import React, { useContext } from "react";
// components
import Footer from "../../../Common/Footer/Footer";
import Header from "../../../Common/Header/Header";
import InputCardCreator from "../InputCardCreator/InputCardCreator";

// libraries
import {
  // Page,
  // Text,
  // Document,
  // View,
  // Image,
  // StyleSheet,
  PDFViewer
} from "@react-pdf/renderer";

import { BusinessCardsContext } from "../../../../context/BusinessCardContext";

import './BusinessCardCreator.scss';

const BusinessCardsCreator = () => {
  const { businessCardData, setBusinessCardData, renderBusinessCard, selectedCard } = useContext(
    BusinessCardsContext
  );

  return (
    <div>
      <Header />
      <div className="container">
        <div className='creator'>
          <InputCardCreator
            businessCardData={businessCardData}
            setBusinessCardData={setBusinessCardData}
          />

          <PDFViewer style={{ height: '400px' }}>
            {renderBusinessCard(selectedCard.cardName)}
          </PDFViewer>


        </div>
      </div>
      <Footer />
    </div >
  );
};
export default BusinessCardsCreator;
