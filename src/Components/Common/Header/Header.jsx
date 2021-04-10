import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import NavList from '../NavList/NavList';
import logo from '../../../assets/logo2.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='container nav'>
        <Link className='logo' to={AppRoute.MAIN_PAGE}>
          <img src={logo} alt='Logo' />
          <p>
            resume <br></br>
            builder
          </p>
        </Link>
        <NavList />
      </nav>
    </header>
  );
};

export default Header;
