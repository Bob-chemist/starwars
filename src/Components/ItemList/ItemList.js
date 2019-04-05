import React, { Component } from 'react';
import classes from './ItemList.module.sass';

export default class ItemList extends Component {
  render() {
    return (
      <ul className={`${classes.ItemList} list-group`}>
        <li className={`list-group-item ${classes.ListGroupItem}`}>
          Luke Skywalker
        </li>
        <li className={`list-group-item ${classes.ListGroupItem}`}>
          Darth Vader
        </li>
        <li className={`list-group-item ${classes.ListGroupItem}`}>R2-D2</li>
      </ul>
    );
  }
}
