import React, { Component } from 'react';

import classes from './PersonDetails.module.sass';

export default class PersonDetails extends Component {
  render() {
    return (
      <div className={`${classes.PersonDetails} card`}>
        <img
          className={classes.PersonImage}
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
          alt="Char 3"
        />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className={classes.Term}>Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className={classes.Term}>Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className={classes.Term}>Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
