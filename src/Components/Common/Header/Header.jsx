import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from "../../../constants";
import NavList from '../NavList/NavList';

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to={AppRoute.MAIN_PAGE}>
          Logo
        </Link>
        <NavList />
      </nav>
    </header>
  )
}

export default Header;
