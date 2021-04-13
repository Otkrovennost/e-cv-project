import React from 'react';
import './CvCard.scss';

function CvCard({ name, image, getId }) {
  return (
    <div onClick={getId} className='cv-card'>
      <div className='cv-card__text-content'>
        <h4 className='cv-card__title'>{name}</h4>
      </div>
      <div className='cv-card__body'>
        <div className='cv-card__image'>
          <img src={image} alt='CV Template' />
        </div>
        <div className='cv-card__colors'>
          <div className='cv-card__color-outer'>
            <div className='cv-card__color-inner'></div>
          </div>

          <div className='cv-card__color-outer'>
            <div className='cv-card__color-inner'></div>
          </div>

          <div className='cv-card__color-outer'>
            <div className='cv-card__color-inner'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvCard;
