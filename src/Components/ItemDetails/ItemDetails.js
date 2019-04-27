import React, { useState, useEffect } from 'react';
import classes from './ItemDetails.module.sass';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className={classes.Term}>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = props => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const { itemId, getData, getImageURL } = props;

    if (!itemId) return;
    setLoading(true);
    getData(itemId)
      .then(DataItem => {
        setItem(DataItem);
        setLoading(false);
        setImage(getImageURL(DataItem));
      })
      .catch(onError);
  }, [props]);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div className={`${classes.ItemDetails} card`}>
      {error ? (
        <ErrorIndicator />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.ItemImageWrapper}>
            <img className={classes.ItemImage} src={image} alt={item.name} />
          </div>

          <div className="card-body">
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(props.children, child => {
                return React.cloneElement(child, { item });
              })}
            </ul>
            <ErrorButton />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetails;
