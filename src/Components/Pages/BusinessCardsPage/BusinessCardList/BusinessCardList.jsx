import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BusinessCardsContext } from "../../../../context/BusinessCardContext";
import Loader from '../../../Common/loader/Loader';

import './BusinessCardList.scss';

const BusinessCardList = ({props}) => {
  const { cardClickHandler, selectedCard } = useContext(
    BusinessCardsContext
  );

  const [cvBusinessCards, setCvBusinessCards] = useState(null);

  useEffect(() => {
    fetch('https://ecvapiserver.herokuapp.com/business_cards')
      .then((res) => res.json())
      .then((data) => {
        setCvBusinessCards(data);
      });
  }, []); 

  console.log(cvBusinessCards)

  return (
    <React.Fragment>
      {cvBusinessCards ? (
        <ul className="card__list">
          {cvBusinessCards.map((elem) => (
            <li className="card__item" key={elem.id}>
              <div className="card__body">
              <Link 
                onClick={(e) => {
                  cardClickHandler(e, elem)
                  props.history.push(`/creator/${elem.id}`);
                }}
              >
                <img className="card__img" src={`data:image/jpeg;base64, ${elem.cardImage}`} alt="Preview business card" />
              </Link>
              </div>
            </li>
          ))}
        </ul>)
        : (
        <Loader/>
      )}
    </React.Fragment>
  )
}
export default BusinessCardList;