import React, { useContext, useState } from "react";
import CvCard from "../CvCard/CvCard";
import "./CvCardList.scss";
import { cvCards } from "../../data";
import { CardsContext } from "../../context/CvContext";
import Modal from "../Common/Modal/Modal";

function CvCardList({ props }) {
  const { cvClickHandler, selectedCv, setCvData, cvData } = useContext(
    CardsContext
  );
  const [isOpened, setIsOpened] = useState(false);
  console.log(cvData.color);
  return (
    <div className="cv-card_list">
      {cvCards.map((item) => {
        return (
          <CvCard
            getId={(e) => {
              cvClickHandler(e, item);
            }}
            key={item.id}
            name={item.cvTitle}
            image={item.cvImage}
            colors={item.cvColors}
            setIsOpened={setIsOpened}
            setCvData={setCvData}
            cvData={cvData}
          />
        );
      })}
      <Modal setIsOpened={setIsOpened} open={isOpened}>
        <div className="modal__content">
          <div className="modal__image-wrapper">
            <img
              src={
                cvData.color
                  ? selectedCv.cvModalImages[cvData.color]
                  : selectedCv.cvImage
              }
              alt="CV"
              className="modal__img"
            />
          </div>
          <div className="modal__text">
            <h3 className="modal__title">{selectedCv?.cvTitle}</h3>
            <p className="modal__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus corrupti, nobis adipisci sed vero ipsam sapiente? Autem
              libero odit fuga eveniet animi omnis qui adipisci enim, facere,
              atque consequuntur. Laborum.
            </p>
            <button
              onClick={() => {
                props.history.push(`/builder/${selectedCv?.id}`);
              }}
              className="modal__btn"
            >
              Start Editing
            </button>
            <div className="cv-card__colors">
              {selectedCv.cvColors.map((color) => {
                return (
                  <div
                    key={color.hash}
                    onClick={() =>
                      setCvData({
                        ...cvData,
                        colorHash: color.hash,
                        color: color.color,
                      })
                    }
                    className="cv-card__color-outer"
                  >
                    <div
                      style={{ backgroundColor: color.hash }}
                      className="cv-card__color-inner"
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CvCardList;
