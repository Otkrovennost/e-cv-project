import React from 'react'
import "./WelcomeSection.scss"

function WelcomeSection() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h2 className="welcome__title">
          Choose any template to start finding your first job!
        </h2>
        <p className="welcome__description">
          I'm baby schlitz hammock wayfarers sustainable coloring book ennui. Tacos roof party organic art party. Art party woke flannel pabst keffiyeh.
        </p>
      </div>
      <div className="welcome__content steps-block">
        <div className="steps-block__row">
          <div className="steps-block__item step">
            <h3 className="step__number">
              01
              </h3>
            <h4 className="step__title">
              Choose
            </h4>
            <p className="step__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="steps-block__item step">
            <h3 className="step__number">
              02
              </h3>
            <h4 className="step__title">
              Fill In
            </h4>
            <p className="step__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="steps-block__row">
          <div className="steps-block__item step">
            <h3 className="step__number">
              03
              </h3>
            <h4 className="step__title">
              Download
            </h4>
            <p className="step__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="steps-block__item step">
            <h3 className="step__number">
              04
              </h3>
            <h4 className="step__title">
              Enjoy !
            </h4>
            <p className="step__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
