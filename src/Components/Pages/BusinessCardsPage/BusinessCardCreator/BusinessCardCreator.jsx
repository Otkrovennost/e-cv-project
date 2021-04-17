import React, { useState } from 'react';
// components
import Footer from '../../../Common/Footer/Footer';
import Header from '../../../Common/Header/Header';
import InputCardCreator from '../InputCardCreator/InputCardCreator';
// libraries
import {
    // Page,
    // Text,
    // Document,
    // View,
    // Image,
    // StyleSheet,
    // PDFViewer,
} from '@react-pdf/renderer';




const BusinessCardsCreator = () => {


    const [personStatePdf, setPersonStatePdf] = useState('')

    console.log(personStatePdf)
    return (
        <div>
            <Header />

            <InputCardCreator />

            {/* <PDFViewer>
                <BusinessCardTemplate />
            </PDFViewer> */}
            <Footer />
        </div>
    )
}
export default BusinessCardsCreator;