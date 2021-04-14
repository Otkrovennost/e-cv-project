import React from 'react';
import { Page, Text, Document, View } from '@react-pdf/renderer';

const CvTemplate = ({ cvData, chosenTemplate }) => {
  return (
    <Document>
      <Page wrap size='A4'>
        <View>
          <Text>Hello From 3</Text>
        </View>
      </Page>
    </Document>
  );
};

export default CvTemplate;
