import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import Row from './Containers/Row';
import StarWarAPI from './services/sw-service';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from './Components/SWComponents';

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
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        <Row left={<PersonList />} right={<PersonDetails itemId={1} />} />
        <Row left={<StarshipList />} right={<StarshipDetails itemId={5} />} />
        <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />
      </div>
    );
  }
}

export default App;
