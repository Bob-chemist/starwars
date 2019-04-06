import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import ItemList from './Components/ItemList';
import PersonDetails from './Components/PersonDetails';
import classes from './App.module.sass';

class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <Header />
        {this.state.showRandomPlanet ? <RandomPlanet /> : null}

        <button
          className={`${classes.TogglePlanet} btn btn-warning btn-lg`}
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
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
