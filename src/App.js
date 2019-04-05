import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import ItemList from './Components/ItemList';
import PersonDetails from './Components/PersonDetails';
import classes from './App.module.sass';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
