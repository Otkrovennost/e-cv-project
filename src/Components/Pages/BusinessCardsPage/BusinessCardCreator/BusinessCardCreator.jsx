import React, { useState } from "react";
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

import BusinessCardTemplate from '../BisnessCardTemplate/BusinessCardTemplate';

const BusinessCardsCreator = () => {
  // const [personStatePdf, setPersonStatePdf] = useState("");

  // console.log(personStatePdf);
  const [person, setPerson] = useState(
    {
      name: 'its your name',
      profession: 'profession',
      phone: 'phone call',
      email: 'email',
      extra: 'extra info',
    }
  );

  return (
    <div>
      <Header />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <InputCardCreator
          person={person} 
          setPerson={setPerson}
        />

        <PDFViewer>
          <BusinessCardTemplate
            card={person} 
          />
        </PDFViewer> 
      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsCreator;
