import React from 'react';
import classes from './Header.module.sass';
import { NavLink } from 'react-router-dom';

const Header = ({ onServiceChange }) => {
  return (
    <div className={`${classes.Header} d-flex`}>
      <h3>
        <NavLink to="/" exact activeClassName={classes.active}>
          Star DB
        </NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people/" activeClassName={classes.active}>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets/" activeClassName={classes.active}>
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="/starships/" activeClassName={classes.active}>
            Starships
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName={classes.active}>
            LoginPage
          </NavLink>
        </li>
        <li>
          <NavLink to="/secret" activeClassName={classes.active}>
            Secret
          </NavLink>
        </li>
      </ul>
      <button
        className={`btn btn-pimary btn-sm ${classes.button}`}
        onClick={onServiceChange}
      >
        Change
      </button>
    </div>
  );
};

export default Header;
