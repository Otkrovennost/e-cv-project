import React from 'react';
import './WelcomeSection.scss';

function WelcomeSection() {
  return (
    <div className='welcome'>
      <div className='welcome__text'>
        <h2 className='welcome__title'>
          Choose any template to start finding your first job!
        </h2>
        <p className='welcome__description'>
          We provide multiple CV's which can suit anybody. Choose any template
          which you prefer and start filling it IN!
        </p>
      </div>
      <div className='welcome__content steps-block'>
        <div className='steps-block__row'>
          <div className='steps-block__item step'>
            <h3 className='step__number'>01</h3>
            <h4 className='step__title'>Choose</h4>
            <p className='step__desc'>Choose any template you like !</p>
          </div>
          <div className='steps-block__item step'>
            <h3 className='step__number'>02</h3>
            <h4 className='step__title'>Fill In</h4>
            <p className='step__desc'>
              Provide all needed information for CV completness
            </p>
          </div>
        </div>
        <div className='steps-block__row'>
          <div className='steps-block__item step'>
            <h3 className='step__number'>03</h3>
            <h4 className='step__title'>Download</h4>
            <p className='step__desc'>
              After finishing your template - just download it !
            </p>
          </div>
          <div className='steps-block__item step'>
            <h3 className='step__number'>04</h3>
            <h4 className='step__title'>Enjoy !</h4>
            <p className='step__desc'>
              Enjoy your new CV and apply to your desired JOB!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
