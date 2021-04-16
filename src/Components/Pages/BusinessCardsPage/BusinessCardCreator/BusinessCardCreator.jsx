import React, { useState } from 'react';
// components
import Footer from '../../../Common/Footer/Footer';
import Header from '../../../Common/Header/Header';
import BusinessCardTemplate from '../BisnessCardTemplate/BusinessCardTemplate';
import InputCardCreator from '../InputCardCreator/InputCardCreator';
// libraries
import {
    Page,
    Text,
    Document,
    View,
    Image,
    StyleSheet,
    PDFViewer,
} from '@react-pdf/renderer';




const BusinessCardsCreator = () => {

    const [personState, setPersonState] = useState(
        {
            name: 'its your name',
            profession: 'profession',
            phone: 'phone call',
            email: 'email',
            extra: 'extra info',
        }
    )


    return (
        <div>
            <Header />

            {Object.values(personState).map(el => <InputCardCreator label={el} />)}

            {/* <PDFViewer>
                <BusinessCardTemplate />
            </PDFViewer> */}
            <Footer />
        </div>
    )
}
export default BusinessCardsCreator;