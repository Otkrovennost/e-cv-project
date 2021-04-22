import React from "react";
import "./CvCard.scss";

function CvCard({
  name,
  image,
  getId,
  setIsOpened,
  isOpened,
  setCvData,
  cvData,
}) {
  return (
    <div onClick={getId} className="cv-card">
      <div className="cv-card__text-content">
        <h4 className="cv-card__title">{name}</h4>
      </div>
      <div className="cv-card__body">
        <div className="cv-card__image">
          <img src={image} alt="CV Template" />
          <button
            onClick={() => {
              setIsOpened(true);
              setCvData({
                ...cvData,
                color: "",
              });
            }}
            className="cv-card__button"
          >
            Preview
          </button>
        </div>
        <div className="cv-card__background"></div>
      </div>
    </div>
  );
}

export default CvCard;
