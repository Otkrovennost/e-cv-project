import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import CvTemplate from '../../CvTemplates/CvTemplate/CvTemplate.jsx';
import "./BuilderPage.scss";
import BuilderForm from "../../BuilderForm/BuilderForm"

export default function BuilderPage() {
  return (
    <div className="builder-page">
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
