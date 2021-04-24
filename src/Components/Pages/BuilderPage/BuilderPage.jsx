import React, { useContext } from "react";
import Header from "../../Common/Header/Header";
import BuilderForm from "../../BuilderForm/BuilderForm";
import "./BuilderPage.scss";
import { PDFViewer } from "@react-pdf/renderer";
import { CardsContext } from "../../../context/CvContext.js";

export default function BuilderPage() {
  const { renderCard, selectedCv, cvData, setCvData } = useContext(
    CardsContext
  );
  return (
    <div className="builder-page">
      <Header />
      <div className="container">
        <div className="builder-page__inner">
          <BuilderForm cvData={cvData} setCvData={setCvData} />
          <div className="builder-page__pdf-viewer">
            <PDFViewer>{renderCard(selectedCv.cvName)}</PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
}
