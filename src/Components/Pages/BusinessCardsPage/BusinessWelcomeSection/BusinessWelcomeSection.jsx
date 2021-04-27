import React from 'react';
import './BusinessWelcomeSection.scss';

function BusinessWelcomeSection() {
    return (
        <div className='welcome'>
            <div className='welcome__text'>
                <h2 className='welcome__title'>
                    Choose a business card template to make a remarkable first impression!
        </h2>
                <p className='welcome__description'>
                    We provide multiple business cards which can suit anybody. Choose any template
                    which you prefer and start filling it IN!
        </p>
            </div>
            <div className='welcome__content steps-block'>
                <div className='steps-block__row'>
                    <div className='steps-block__item step'>
                        <h3 className='step__number'>01</h3>
                        <h4 className='step__title'>Choose</h4>
                        <p className='step__desc'>Choose any template you like!</p>
                    </div>
                    <div className='steps-block__item step'>
                        <h3 className='step__number'>02</h3>
                        <h4 className='step__title'>Fill In</h4>
                        <p className='step__desc'>
                            Provide all needed information for business card completeness!
            </p>
                    </div>
                </div>
                <div className='steps-block__row'>
                    <div className='steps-block__item step'>
                        <h3 className='step__number'>03</h3>
                        <h4 className='step__title'>Download</h4>
                        <p className='step__desc'>
                            After finishing your template - just download it!
            </p>
                    </div>
                    <div className='steps-block__item step'>
                        <h3 className='step__number'>04</h3>
                        <h4 className='step__title'>Enjoy !</h4>
                        <p className='step__desc'>
                            Enjoy your new business card!
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessWelcomeSection;
