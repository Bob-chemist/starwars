import React, { Component } from 'react';
import classes from './ItemList.module.sass';

import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

export default class ItemList extends Component {
  state = {
    itemList: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then(itemList => {
        this.setState({
          itemList,
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
    return arr.map(item => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <li
          key={id}
          className={`list-group-item ${classes.ListGroupItem}`}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList, error, loading } = this.state;

    return (
      <ul className={`${classes.ItemList} list-group`}>
        {error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Loader />
        ) : (
          this.renderItems(itemList)
        )}
      </ul>
    );
  }
}
