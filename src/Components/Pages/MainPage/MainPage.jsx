import { motion, transform } from 'framer-motion';
import React from 'react';
import { mainPageAnimations } from '../../../animations';
import Header from '../../Common/Header/Header';
import './MainPage.scss';

const MainPage = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={mainPageAnimations}>
      <Header />
      <div className='container'>
        <div className='intro'>
          <motion.h1
            initial={{ translateX: '-200%' }}
            animate={{ translateX: '0%' }}
            transition={{ type: 'tween', duration: 1 }}
            className='intro__title'>
            Choose and build your own CV in just 20 minutes!
          </motion.h1>
          <motion.p
            initial={{ translateX: '-200%' }}
            animate={{ translateX: '0%' }}
            transition={{ type: 'tween', duration: 1, delay: 0.2 }}
            className='intro__description'>
            I'm baby schlitz hammock wayfarers sustainable coloring book ennui.
            Tacos roof party organic art party. Art party woke flannel pabst
            keffiyeh.
          </motion.p>
          <motion.a
            initial={{ translateX: '-200%' }}
            animate={{ translateX: '0%' }}
            transition={{ type: 'tween', duration: 1, delay: 0.4 }}
            className='intro__button'
            href='#nowhear'>
            Get Template
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
