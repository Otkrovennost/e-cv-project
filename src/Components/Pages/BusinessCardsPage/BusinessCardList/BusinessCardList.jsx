import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { businessCards } from "../../../../data";
import { BusinessCardsContext } from "../../../../context/BusinessCardContext";
// import { AppRoute } from '../../../../constants'

import './BusinessCardList.scss';

const BusinessCardList = ({props}) => {
  const { cardClickHandler, selectedCard } = useContext(
    BusinessCardsContext
  );

  return (
    <ul className="card__list">
      {businessCards.map((elem) => (
        <li className="card__item" key={elem.id}>
          <div className="card__body">
          <Link 
            onClick={(e) => {
              cardClickHandler(e, elem)
              props.history.push(`/creator/${elem.id}`);
            }}
          >
            <img className="card__img" src={elem.cardImage} alt="Preview business card"/>
          </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default BusinessCardList;