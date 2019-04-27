import React from 'react';
import classes from './RandomPlanet.module.sass';

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img
        className={classes.PlanetImage}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name}
      />
      <div className={classes.PlanetDetails}>
        <h4>{name}</h4>
        <ul className={`list-group list-group-flush ${classes.ListGroup}`}>
          <li className={`list-group-item ${classes.ListGroupItem}`}>
            <span className={classes.Term}>Population</span>
            <span>{population}</span>
          </li>
          <li className={`list-group-item ${classes.ListGroupItem}`}>
            <span className={classes.Term}>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className={`list-group-item ${classes.ListGroupItem}`}>
            <span className={classes.Term}>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlanetView;
