import React, { useContext, useState } from "react";
import CvCard from "../CvCard/CvCard";
import "./CvCardList.scss";
import { cvCards } from "../../data";
import { CardsContext } from "../../context/CvContext";
import Modal from "../Common/Modal/Modal";

function CvCardList({ props }) {
  const { cvClickHandler, selectedCv } = useContext(CardsContext);
  const [isOpened, setIsOpened] = useState(false);
  console.log(selectedCv);
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
          />
        );
      })}
      <Modal setIsOpened={setIsOpened} open={isOpened}>
        <div className="modal__content">
          <div className="modal__image-wrapper">
            <img src={selectedCv?.cvImage} alt="" className="modal__img" />
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
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CvCardList;
