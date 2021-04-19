import React, { useContext } from "react";
// components
import Footer from "../../../Common/Footer/Footer";
import Header from "../../../Common/Header/Header";
import InputCardCreator from "../InputCardCreator/InputCardCreator";
import BusinessCardTemplate from '../BusinessCardTemplate/BusinessCardTemplate/BusinessCardTemplate';
import BusinessCardTemplate2 from '../BusinessCardTemplate/BusinessCardTemplate2/BusinessCardTemplate2';


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

const BusinessCardsCreator = () => {
  const { businessCardData, setBusinessCardData, renderBusinessCard, selectedCard } = useContext(
    BusinessCardsContext

  );

  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
    </div>
  );
};
export default BusinessCardsCreator;
