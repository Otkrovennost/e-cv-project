import React from 'react';
import CvCard from '../CvCard/CvCard';
import "./CvCardList.scss";
import {cvCards} from "../../data";

function CvCardList({props}) {

  // Getting Id of a CV and pushing it to history.
  const cvClickHandler = (e, item) => {
    props.history.push(`/builder/${item.id}`)
  }

  return (
    <div className="cv-card_list">
      {cvCards.map(item => {
        return <CvCard getId={(e) => cvClickHandler(e, item)} key={item.id} name={item.cvTitle} image={item.cvImage} colors={item.cvColors} />
      })}
    </div>
  )
}

export default CvCardList
