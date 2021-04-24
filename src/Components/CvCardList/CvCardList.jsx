import React, { useContext, useState, useEffect } from 'react';
import CvCard from '../CvCard/CvCard';
import './CvCardList.scss';
import { CardsContext } from '../../context/CvContext';
import Modal from '../Common/Modal/Modal';
import Loader from '../Common/loader/Loader';

function CvCardList({ props }) {
  const { cvClickHandler, selectedCv, setCvData, cvData } = useContext(
    CardsContext
  );
  const [isOpened, setIsOpened] = useState(false);
  const [cvTemplates, setCvTemplates] = useState(null);

  useEffect(() => {
    fetch('https://ecvapiserver.herokuapp.com/cv_templates')
      .then((res) => res.json())
      .then((data) => {
        setCvTemplates(data);
      });
  }, []);

  return (
    <div className="cv-cards">
      {cvTemplates ? (
        <div className="cv-card_list">
          {cvTemplates?.map((item) => {
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
                      ? `data:image/jpeg;base64, ${
                          selectedCv?.cvModalImages[cvData.color]
                        }`
                      : `data:image/jpeg;base64, ${selectedCv?.cvImage}`
                  }
                  alt="CV"
                  className="modal__img"
                />
              </div>
              <div className="modal__text">
                <h3 className="modal__title">{selectedCv?.cvTitle}</h3>
                <p className="modal__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus corrupti, nobis adipisci sed vero ipsam sapiente?
                  Autem libero odit fuga eveniet animi omnis qui adipisci enim,
                  facere, atque consequuntur. Laborum.
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
                  {selectedCv?.cvColors.map((color) => {
                    return (
                      <div
                        key={color?.id}
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
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CvCardList;
