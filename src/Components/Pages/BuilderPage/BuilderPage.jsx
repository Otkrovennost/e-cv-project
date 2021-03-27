import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import CvTemplate from '../../CvTemplates/CvTemplate/CvTemplate.jsx';
import BuilderForm from "../../BuilderForm/BuilderForm";

import "./BuilderPage.scss";

export default function BuilderPage() {
  return (
    <div className="builder-page">
      <Header />
      <div className="container">
        <div className="builder-page__inner">
          <BuilderForm />
          <PDFViewer>
            <CvTemplate />
          </PDFViewer>
        </div>
      </div>
    </div>
  )
}
