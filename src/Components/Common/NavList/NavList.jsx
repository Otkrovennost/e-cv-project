import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from '../../../constants';

import './NavList.scss';

const NavList = () => {
  return (
    <ul className='nav__list'>
      <li className='nav__item'>
        <NavLink className='nav__link' to={AppRoute.CV_TEMPLATES_PAGE}>
          CV Templates
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink
          className='nav__link'
          to={AppRoute.BUSINESS_CARD_PAGE}>
          Business Cards
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink className='nav__link' to={AppRoute.ABOUT_PAGE}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
