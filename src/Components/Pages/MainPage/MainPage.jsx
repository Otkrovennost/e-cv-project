import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { mainPageAnimations } from '../../../animations';
import Header from '../../Common/Header/Header';
import './MainPage.scss';
import lottie from 'lottie-web';

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
      initial='out'
      animate='in'
      exit='out'
      variants={mainPageAnimations}>
      <Header />
      <div className='container'>
        <div className='hero'>
          <div className='hero__intro'>
            <motion.h1 className='intro__title'>
              Choose and build your own CV in just 20 minutes!
            </motion.h1>
            <motion.p className='intro__description'>
              I'm baby schlitz hammock wayfarers sustainable coloring book
              ennui. Tacos roof party organic art party. Art party woke flannel
              pabst keffiyeh.
            </motion.p>
            <motion.a className='intro__button' href='#nowhear'>
              Get Template
            </motion.a>
          </div>
          <div ref={lottieContainer} className='hero__lottie'></div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
