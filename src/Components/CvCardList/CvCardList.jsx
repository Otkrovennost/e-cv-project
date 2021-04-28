import React, { useContext, useState, useEffect } from 'react';
import CvCard from '../CvCard/CvCard';
import './CvCardList.scss';
import { CardsContext } from '../../context/CvContext';
import Modal from '../Common/Modal/Modal';
import Loader from '../Common/loader/Loader';
import AuthContext from '../../context/AuthContext';
import uuid from 'uuid/v5';

function CvCardList({ props }) {
  const { cvClickHandler, selectedCv, setCvData, cvData } = useContext(
    CardsContext
  );
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const [isOpened, setIsOpened] = useState(false);
  const [cvTemplates, setCvTemplates] = useState(null);

  console.log(loggedIn);

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
                  Simple and effective resume template. It consists of 4 parts,
                  where you can fill in: about section, education section,
                  experience section and skills section. Also you can fiil in
                  your contact data.
                </p>
                <button
                  onClick={() => {
                    if (loggedIn) {
                      props.history.push(`/builder/${selectedCv?.id}`);
                    } else {
                      props.history.push(`/auth`);
                    }
                  }}
                  className="modal__btn"
                >
                  Start Editing
                </button>
                <div className="cv-card__colors">
                  {selectedCv?.cvColors?.map((color, index, self) => {
                    return (
                      <div
                        key={color}
                        onClick={() =>
                          setCvData({
                            ...cvData,
                            colorHash: color.hash,
                            color: color.color,
                          })
                        }
                        style={{ backgroundColor: color.hash }}
                        className="cv-card__color-inner"
                      ></div>
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
