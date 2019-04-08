import React from 'react';
import classes from './Row.module.sass';

const Row = ({ left, right }) => {
  return (
    <div className={`row mb2 ${classes.Row}`}>
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default Row;
