import React, { Component } from 'react';
import classes from './ItemList.module.sass';
import StarWarAPI from '../../services/sw-service';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

export default class ItemList extends Component {
  swapiService = new StarWarAPI();

  state = {
    peopleList: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => {
        this.setState({
          peopleList,
          loading: false,
        });
      })
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

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
    const { peopleList, error, loading } = this.state;

    return (
      <ul className={`${classes.ItemList} list-group`}>
        {error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Loader />
        ) : (
          this.renderItems(peopleList)
        )}
      </ul>
    );
  }
}
