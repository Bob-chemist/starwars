import React from 'react';
import classes from './Header.module.sass';
import { Link } from 'react-router-dom';

const Header = ({ onServiceChange }) => {
  return (
    <div className={`${classes.Header} d-flex`}>
      <h3>
        <Link to="/">Star DB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
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
