import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppRoute } from "../../../constants";
import NavList from "../NavList/NavList";
import logo from "../../../assets/logo2.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <div className="header__left">
          <div className="header__logo">
            <Link className="logo" to={AppRoute.MAIN_PAGE}>
              <img src={logo} alt="Logo" />
              <p>
                resume <br></br>
                builder
              </p>
            </Link>
          </div>
          <div className="header__line"></div>
          <NavList />
        </div>
        <div className="header__right">
          <NavLink className="nav__link" to={AppRoute.HELP_PAGE}>
            Login | Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
