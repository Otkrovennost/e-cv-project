import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import CvTemplate from './CvTemplate/CvTemplate.jsx'
import Form from './Form/Form'
import "./BuilderPage.scss"

export default function BuilderPage() {
  return (
    <div className="builder-page">
      <div className="container">
        <div className="builder-page__inner">
          <Form />
          <PDFViewer>
            <CvTemplate />
          </PDFViewer>
        </div>
      </div>
    </div>
  )
}
