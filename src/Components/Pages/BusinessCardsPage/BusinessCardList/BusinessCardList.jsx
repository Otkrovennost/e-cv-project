import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../../context/AuthContext';
import { BusinessCardsContext } from '../../../../context/BusinessCardContext';
import Loader from '../../../Common/loader/Loader';

import './BusinessCardList.scss';

const BusinessCardList = ({ props }) => {
  const { cardClickHandler, selectedCard } = useContext(BusinessCardsContext);

  const [cvBusinessCards, setCvBusinessCards] = useState(null);

  useEffect(() => {
    fetch('https://ecvapiserver.herokuapp.com/business_cards')
      .then((res) => res.json())
      .then((data) => {
        setCvBusinessCards(data);
      });
  }, []);

  const { loggedIn, getLoggedIn } = useContext(AuthContext);

  return (
    <div className="business-cards">
      {cvBusinessCards ? (
        <ul className="card__list">
          {cvBusinessCards.map((elem) => (
            <li className="card__item" key={elem.id}>
              <div className="card__body">
                <Link
                  onClick={(e) => {
                    cardClickHandler(e, elem);
                    if (loggedIn) {
                      props.history.push(`/creator/${elem.id}`);
                    } else {
                      props.history.push(`/auth`);
                    }
                  }}
                >
                  <img
                    className="card__img"
                    src={`data:image/jpeg;base64, ${elem.cardImage}`}
                    alt="Preview business card"
                  />
                  {/* <img className="card__img" src={elem.cardImage} alt="Preview business card" /> */}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default BusinessCardList;
