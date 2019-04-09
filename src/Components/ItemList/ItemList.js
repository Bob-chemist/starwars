import React from 'react';
import classes from './ItemList.module.sass';

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        key={id}
        className={`list-group-item ${classes.ListGroupItem}`}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <ul className={`${classes.ItemList} list-group`}>{items}</ul>;
};

export default ItemList;
