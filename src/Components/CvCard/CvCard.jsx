import React from 'react'
import example_cv from "../../assets/example-cv.svg"
import "./CvCard.scss"

function CvCard() {
  return (
    <div className="cv-card">
      <div className="cv-card__text-content">
        <h4 className="cv-card__title">Yellow Bee</h4>
      </div>
      <div className="cv-card__body">
        <div className="cv-card__image">
          <img src={example_cv} alt="CV Template" />
        </div>
        <div className="cv-card__colors">
          <div className="cv-card__color-outer">
            <div className="cv-card__color-inner">

            </div>
          </div>

          <div className="cv-card__color-outer">
            <div className="cv-card__color-inner">

            </div>
          </div>

          <div className="cv-card__color-outer">
            <div className="cv-card__color-inner">

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CvCard
