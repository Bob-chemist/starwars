import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import { StarWarAPI, DummyStarWarAPI } from './services';
import ErrorBoundry from './Containers/ErrorBoundry';
import { SwapiServiceProvider } from './Components/SwapiServiceContext';
import classes from './App.module.sass';
import { PeoplePage, PlanetsPage, StarshipsPage } from './Containers/Pages';

class App extends Component {
  state = {
    hasError: false,
    swapiService: new StarWarAPI(),
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof StarWarAPI ? DummyStarWarAPI : StarWarAPI;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className={classes.App}>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <PeoplePage />

            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
