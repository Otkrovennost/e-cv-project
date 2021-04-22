import React from "react";
import { NavLink } from "react-router-dom";

import { AppRoute } from "../../../constants";

import "./NavList.scss";

const NavList = ({ isNavOpened, setIsNavOpened }) => {
  return (
    <ul className={isNavOpened ? "nav__list nav__list--active" : "nav__list"}>
      <li
        onClick={() => setIsNavOpened(!isNavOpened)}
        className="nav__exit-icon"
      >
        <i class="far fa-times-circle"></i>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={AppRoute.CV_TEMPLATES_PAGE}>
          CV Templates
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={AppRoute.BUSINESS_CARD_PAGE}>
          Business Cards
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={AppRoute.HELP_PAGE}>
          CV Help &amp; Tips
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={AppRoute.HELP_PAGE}>
          Login | Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
