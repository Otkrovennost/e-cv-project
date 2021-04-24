import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { mainPageAnimations } from '../../../animations';
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
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={mainPageAnimations}
      className="hero-wrapper"
    >
      <Header />
      <div className="container">
        <div className="hero">
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
      </div>
    </motion.div>
  );
};

export default MainPage;
