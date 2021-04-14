import { motion } from 'framer-motion';
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
          <h1 className='visually-hidden'>Welcom</h1>
          <p className='intro__title'>
            Choose and build your own CV in just 20 minutes!
          </p>
          <p className='intro__description'>
            I'm baby schlitz hammock wayfarers sustainable coloring book ennui.
            Tacos roof party organic art party. Art party woke flannel pabst
            keffiyeh.
          </p>
          <a className='intro__button' href='#nowhear'>
            Get Template
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
