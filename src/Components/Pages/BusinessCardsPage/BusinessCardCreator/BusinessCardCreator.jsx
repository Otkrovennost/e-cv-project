import React, { useState } from "react";
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
      <div className="container">
        <div style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <InputCardCreator
            person={person}
            setPerson={setPerson}
          />

          <PDFViewer style={{ height: '400px' }}>
            <BusinessCardTemplate2
              card={person}
            />
          </PDFViewer>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BusinessCardsCreator;
