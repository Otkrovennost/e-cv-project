import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../constants';
import NavList from '../NavList/NavList';
import logo from '../../../assets/logo2.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content container'>
        <nav className='footer__nav nav'>
          <Link className='logo' to={AppRoute.MAIN_PAGE}>
            <img src={logo} alt='' />
          </Link>
          <NavList />
        </nav>
        <div className='footer__dev'>
          <p className='footer__dev-desc'>
            Created&nbsp;by Wild&nbsp;Code&nbsp;School Students
          </p>
          <ul className='footer__contacts'>
            <li className='footer__contacts-item'>
              <span className='footer__contacts-name'>Nazar Archakov</span>
              <div className='footer__contacts-list'>
                <a
                  className='footer__contacts-github'
                  href='https://github.com/hidemydreams'
                  target='_blank'
                  rel='noreferrer'>
                  GitHub
                </a>
                <span role='separator'>|</span>
                <a
                  className='footer__contacts-linkedin'
                  href='https://www.linkedin.com/in/nazar-archakov/'
                  target='_blank'
                  rel='noreferrer'>
                  LinkedIn
                </a>
              </div>
            </li>
            <li className='footer__contacts-item'>
              <span className='footer__contacts-name'>Anastasiya Ivanova</span>
              <div className='footer__contacts-list'>
                <a
                  className='footer__contacts-github'
                  href='https://github.com/Otkrovennost/'
                  target='_blank'
                  rel='noreferrer'>
                  GitHub
                </a>
                <span role='separator'>|</span>
                <a
                  className='footer__contacts-linkedin'
                  href='https://www.linkedin.com/in/otkrovennost/'
                  target='_blank'
                  rel='noreferrer'>
                  LinkedIn
                </a>
              </div>
            </li>
            <li className='footer__contacts-item'>
              <span className='footer__contacts-name'>Irina Mychko</span>
              <div className='footer__contacts-list'>
                <a
                  className='footer__contacts-github'
                  href='https://github.com/Irina-Riska'
                  target='_blank'
                  rel='noreferrer'>
                  GitHub
                </a>
                <span role='separator'>|</span>
                <a
                  className='footer__contacts-linkedin'
                  href='https://www.linkedin.com/in/ira-mytchko/'
                  target='_blank'
                  rel='noreferrer'>
                  LinkedIn
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
