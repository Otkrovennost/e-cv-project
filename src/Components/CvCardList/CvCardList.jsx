import React, { useContext, useState } from 'react';
import CvCard from '../CvCard/CvCard';
import './CvCardList.scss';
import { cvCards } from '../../data';
import { CardsContext } from '../context/CvContext';
import Modal from '../Common/Modal/Modal';

function CvCardList({ props }) {
  const { cvClickHandler } = useContext(CardsContext);
  const [isOpened, setIsOpened] = useState(false);
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
            setIsOpened={setIsOpened}
            isOpened={isOpened}
          />
        );
      })}
      <Modal open={isOpened}>Nice Modal</Modal>
    </div>
  );
}

export default CvCardList;
