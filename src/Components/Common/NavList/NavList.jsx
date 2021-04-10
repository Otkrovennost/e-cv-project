import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from "../../../constants";

import "./NavList.scss";

const NavList = () => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link
          className="nav__link"
          to={AppRoute.CV_TEMPLATES_PAGE}
        >
          CV Templates
          </Link>
      </li>
      <li className="nav__item">
        <Link
          className="nav__link"
          to={AppRoute.BUSINESS_CARD_TEMPLATES_PAGE}
        >
          Business Cards
          </Link>
      </li>
      <li className="nav__item">
        <Link
          className="nav__link"
          to={AppRoute.MAIN_PAGE}
        >
          About
          </Link>
      </li>
    </ul>
  )
}

export default NavList;
