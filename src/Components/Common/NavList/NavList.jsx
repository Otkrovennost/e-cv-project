import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import AuthContext from '../../../context/AuthContext';
import './NavList.scss';
import axios from 'axios';

const NavList = ({ isNavOpened, setIsNavOpened }) => {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);

  const logOut = async () => {
    console.log('here');
    await axios.get('https://ecvapiserver.herokuapp.com/auth/logout');
    getLoggedIn();
  };
  return (
    <ul className={isNavOpened ? 'nav__list nav__list--active' : 'nav__list'}>
      <li
        onClick={() => setIsNavOpened(!isNavOpened)}
        className="nav__exit-icon"
      >
        <i className="far fa-times-circle"></i>
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
      {loggedIn === true && (
        <>
          <li className="nav__item">
            <NavLink
              exact={true}
              onClick={logOut}
              to={AppRoute.MAIN_PAGE}
              className="nav__link"
            >
              <i class="far fa-user"></i>
            </NavLink>
          </li>
        </>
      )}
      {loggedIn === false && (
        <>
          <li className="nav__item">
            <NavLink className="nav__link" to={AppRoute.AUTH_PAGE}>
              Login | Register
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavList;
