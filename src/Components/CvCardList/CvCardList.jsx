import React, { useContext } from 'react';
import CvCard from '../CvCard/CvCard';
import './CvCardList.scss';
import { cvCards } from '../../data';
import { CardsContext } from '../context/CvContext';

function CvCardList({ props }) {
  const { cvClickHandler } = useContext(CardsContext);
  return (
    <div className='cv-card_list'>
      {cvCards.map((item) => {
        return (
          <CvCard
            getId={(e) => {
              cvClickHandler(e, item);
              props.history.push(`/builder/${item.id}`);
            }}
            key={item.id}
            name={item.cvTitle}
            image={item.cvImage}
            colors={item.cvColors}
          />
        );
      })}
    </div>
  );
}

export default CvCardList;
