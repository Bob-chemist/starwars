import React, { Component } from 'react';
import classes from './RandomPlanet.module.sass';
import StarWarAPI from '../../services/sw-service';
import Loader from '../Loader/Loader';
import PlanetView from './PlanetView';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends Component {
  swapiService = new StarWarAPI();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18) + 1;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { loading, planet, error } = this.state;

    return (
      <div className={`${classes.RandomPlanet} jumbotron rounded`}>
        {error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Loader />
        ) : (
          <PlanetView planet={planet} />
        )}
      </div>
    );
  }
}
