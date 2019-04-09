import React, { Component } from 'react';
import classes from './ItemDetails.module.sass';
import StarWarAPI from '../../services/sw-service';
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

export default class ItemDetails extends Component {
  swapiService = new StarWarAPI();

  state = {
    item: null,
    loading: true,
    error: false,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageURL } = this.props;

    if (!itemId) return;
    getData(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false,
          image: getImageURL(item),
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

  render() {
    const { loading, error, item, image } = this.state;

    return (
      <div className={`${classes.ItemDetails} card`}>
        {error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <img className={classes.ItemImage} src={image} alt={item.name} />
            <div className="card-body">
              <h4>{item.name}</h4>
              <ul className="list-group list-group-flush">
                {React.Children.map(this.props.children, child => {
                  return React.cloneElement(child, { item });
                })}
              </ul>
              <ErrorButton />
            </div>
          </>
        )}
      </div>
    );
  }
}
