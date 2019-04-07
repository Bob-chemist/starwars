import React from 'react';
import classes from './PersonDetails.module.sass';
import ErrorButton from '../ErrorButton';

const PersonDetailView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <>
      <img
        className={classes.PersonImage}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className={classes.Term}>Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className={classes.Term}>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className={classes.Term}>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};

export default PersonDetailView;
