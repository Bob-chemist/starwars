import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import { StarWarAPI, DummyStarWarAPI } from './services';
import ErrorBoundry from './Containers/ErrorBoundry';
import { SwapiServiceProvider } from './Components/SwapiServiceContext';
import classes from './App.module.sass';
import { PeoplePage, PlanetsPage, StarshipsPage } from './Containers/Pages';
import { BrowserRouter, Route } from 'react-router-dom';
import { StarshipDetails } from './Components/SWComponents';

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
          <BrowserRouter>
            <div className={classes.App}>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route path="/" exact render={() => <h2>Welcome!!!</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  return <StarshipDetails itemId={match.params.id} />;
                }}
              />
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
