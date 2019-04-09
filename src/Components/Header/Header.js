import React from 'react';
import classes from './Header.module.sass';

const Header = ({ onServiceChange }) => {
  return (
    <div className={`${classes.Header} d-flex`}>
      <h3>
        <a href="#">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
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
