import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Header from '../../Common/Header/Header';
import CvTemplate from '../../CvTemplates/CvTemplate/CvTemplate.jsx';
import BuilderForm from '../../BuilderForm/BuilderForm';
import './BuilderPage.scss';

export default function BuilderPage() {
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
          <div className='overlay'>
            <PDFViewer>
              <CvTemplate
                cvData={cvData}
                chosenTemplate={JSON.parse(localStorage.getItem('cv'))}
              />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
}
