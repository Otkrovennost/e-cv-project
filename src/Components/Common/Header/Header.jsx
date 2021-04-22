import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppRoute } from "../../../constants";
import NavList from "../NavList/NavList";
import logo from "../../../assets/logo2.svg";

import "./Header.scss";

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <Link className="logo" to={AppRoute.MAIN_PAGE}>
              <img src={logo} alt="Logo" />
              <p>
                resume <br></br>
                builder
              </p>
            </Link>
          </div>
          <nav className="nav">
            <div className="header__left">
              <div className="header__logo"></div>
              <NavList
                isNavOpened={isNavOpened}
                setIsNavOpened={setIsNavOpened}
              />
            </div>
          </nav>
          <div
            onClick={() => setIsNavOpened(!isNavOpened)}
            className="header__burger-icon"
          >
            <i className="fas fa-bars"></i>
          </div>
        </header>
      </div>
    </header>
  );
};

export default Header;
