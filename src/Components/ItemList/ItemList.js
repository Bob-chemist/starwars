import React, { Component } from 'react';
import classes from './ItemList.module.sass';
import StarWarAPI from '../../services/sw-service';
import Loader from '../Loader';

export default class ItemList extends Component {
  swapiService = new StarWarAPI();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => {
        this.setState({
          peopleList,
        });
      })
      .catch();
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          key={id}
          className={`list-group-item ${classes.ListGroupItem}`}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Loader />;
    return (
      <ul className={`${classes.ItemList} list-group`}>
        {this.renderItems(peopleList)}
      </ul>
    );
  }
}
