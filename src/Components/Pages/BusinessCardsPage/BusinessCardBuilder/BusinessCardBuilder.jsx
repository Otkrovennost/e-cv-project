import React from 'react';
import Header from '../../../Common/Header/Header';

import { PDFViewer, Page, Text, Document, View, Image } from '@react-pdf/renderer';



const BusinessCardBuilder = () => {
    return (
        <div className="BusinessCardBuilder">
            <Header />
            <PDFViewer>
                <Document>


                    <Page wrap size='a4'>
                        <View style={{ backgroundColor: "yellow", width: "200px", height: "120px", border: "1px solid black" }}>
                            <Text style={{ size: " 5px", backgroundColor: "red", display: "flex", alignItems: "space-between" }}>Bob Jordan</Text>
                            <Text style={{

                            }}>Developer</Text>
                        </View>
                    </Page>

                </Document>
            </PDFViewer>

        </div>
    )
}

export default BusinessCardBuilder;