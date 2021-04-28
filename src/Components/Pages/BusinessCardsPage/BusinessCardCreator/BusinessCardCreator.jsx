import React, { useContext } from "react";
// components
import Footer from "../../../Common/Footer/Footer";
import Header from "../../../Common/Header/Header";
import InputCardCreator from "../InputCardCreator/InputCardCreator";

// libraries
import {
  PDFViewer
} from "@react-pdf/renderer";

import { BusinessCardsContext } from "../../../../context/BusinessCardContext";

import './BusinessCardCreator.scss';

const BusinessCardsCreator = () => {
  const { businessCardData, setBusinessCardData, renderBusinessCard, selectedCard } = useContext(
    BusinessCardsContext
  );

  return (
    <div className="creator-block">
      <Header />
      <div className="container">
        <div className='creator'>
          <InputCardCreator
            businessCardData={businessCardData}
            setBusinessCardData={setBusinessCardData}
          />
          <div className="creator__pdf">
            <PDFViewer style={{ height: '350px', width: '100%'}}>
              {renderBusinessCard(selectedCard.cardName)}
            </PDFViewer>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};
export default BusinessCardsCreator;
