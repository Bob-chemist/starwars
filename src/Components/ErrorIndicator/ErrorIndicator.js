import React from 'react';
import classes from './ErrorIndicator.module.sass';

const ErrorIndicator = props => {
  return (
    <div className={classes.ErrorIndicator}>
      {`Something gone wrong! ${props.info}`}
    </div>
  );
};

export default ErrorIndicator;
