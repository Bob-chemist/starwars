import React from 'react';
import classes from './ItemDetails.module.sass';
import ErrorButton from '../ErrorButton';

const ItemDetailView = ({ item, image }) => {
  const { name, gender, birthYear, eyeColor } = item;
  return (
    <>
      <img className={classes.ItemImage} src={image} alt={name} />
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

export default ItemDetailView;
