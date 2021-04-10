import React, { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Header from '../../Common/Header/Header';
import CvTemplate from '../../CvTemplates/CvTemplate/CvTemplate.jsx';
import BuilderForm from '../../BuilderForm/BuilderForm';
import './BuilderPage.scss';

export default function BuilderPage({ chosenTemplate }) {
  const cvDataInit = {
    avatar: '',
    title: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    summary: '',
    employmentHistory: [],
    educationHistory: [],
    skills: [],
  };

  const [cvData, setCvData] = useState(cvDataInit);

  return (
    <div className='builder-page'>
      <Header />
      <div className='container'>
        <div className='builder-page__inner'>
          <BuilderForm setCvData={setCvData} cvData={cvData} />
          <PDFViewer>
            <CvTemplate cvData={cvData} styles={chosenTemplate[0].style} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
