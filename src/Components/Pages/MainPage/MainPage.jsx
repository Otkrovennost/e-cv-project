import { motion } from 'framer-motion';
import Footer from '../../Common/Footer/Footer';
import offerIcon from '../../../assets/offers-icon.svg';
import visibleIcon from '../../../assets/visible-icon.svg';

import workerIcon from '../../../assets/worker-icon.svg';

import withImage from '../../../assets/with.svg';
import withoutImage from '../../../assets/without.svg';
import React, { useEffect, useRef } from 'react';
import Header from '../../Common/Header/Header';
import './MainPage.scss';
import lottie from 'lottie-web';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../constants';
const MainPage = () => {
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../animations/resume-animation.json'),
    });
  }, []);
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__content">
        <div className="hero container">
          <div className="hero__intro">
            <motion.h1 className="intro__title">
              Choose and build your CV.
            </motion.h1>
            <motion.p className="intro__description">
              Writing a resume feels hard. And yet your future depends on it.
              Stop putting it off — E-CV resume builder is here to help.
            </motion.p>
            <NavLink className="intro__button" to={AppRoute.CV_TEMPLATES_PAGE}>
              Get Template
            </NavLink>
          </div>
          <div ref={lottieContainer} className="hero__lottie"></div>
        </div>
        <section className="info container">
          <div className="info__text-content info-text">
            <h3 className="info-text__title">Make more, manage less</h3>
            <p className="info-text__description">
              E-CV integrates and automates every step of your templates editing
              so it runs seamlessly - from idea to the download button.
            </p>
          </div>
          <div className="info__row">
            <div className="info__item">
              <h3 className="info__subtitle">Without E-CV</h3>
              <img src={withoutImage} alt="Without E-CV" />
            </div>
            <div className="info__item">
              <h3 className="info__subtitle">With E-CV</h3>
              <img src={withImage} alt="With E-CV" />
            </div>
          </div>
          <button className="info__button big-btn">Start Editing</button>
        </section>
        <section className="advantages container">
          <div className="advantages__row">
            <div className="advantages__item advantages-item">
              <img
                className="advantages-item__image"
                src={workerIcon}
                alt="Icon"
              />
              <h4 className="advantages-item__title">Get More Offers</h4>
              <p className="advantages-item__description">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.
              </p>
            </div>
            <div className="advantages__item advantages-item">
              <img
                className="advantages-item__image"
                src={offerIcon}
                alt="Icon"
              />
              <h4 className="advantages-item__title">Get More Offers</h4>
              <p className="advantages-item__description">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.
              </p>
            </div>
            <div className="advantages__item advantages-item">
              <img
                className="advantages-item__image"
                src={visibleIcon}
                alt="Icon"
              />
              <h4 className="advantages-item__title">Get More Offers</h4>
              <p className="advantages-item__description">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.
              </p>
            </div>
          </div>
          <button className="advantages__button big-btn">Get Templates</button>
        </section>
      </div>
      < Footer/>
    </div>
  );
};

export default MainPage;
