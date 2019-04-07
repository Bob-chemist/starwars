import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import ErrorIndicator from './Components/ErrorIndicator';
import classes from './App.module.sass';
import ErrorButton from './Components/ErrorButton/ErrorButton';
import PeoplePage from './Containers/PeoplePage';
import ItemList from './Components/ItemList';
import PersonDetails from './Components/PersonDetails';
import StarWarAPI from './services/sw-service';

class App extends Component {
  swapiService = new StarWarAPI();
  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <div className={classes.App}>
        <Header />
        {this.state.showRandomPlanet ? <RandomPlanet /> : null}

        <div className="row mb2 button-row">
          <div className="col-8">
            <button
              className={`${classes.TogglePlanet} btn btn-warning btn-lg`}
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>
        </div>

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={({ name, diameter }) => (
                <span>
                  {`${name} - ${diameter}   `}
                  <button>!!!</button>
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={({ name, model }) => `${name} - ${model}`}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
