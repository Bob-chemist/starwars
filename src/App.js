import React, { Component } from 'react';
import Header from './Components/Header';
import RandomPlanet from './Components/RandomPlanet';
import ErrorIndicator from './Components/ErrorIndicator';
import classes from './App.module.sass';
import ErrorButton from './Components/ErrorButton/ErrorButton';
import PeoplePage from './Containers/PeoplePage';
import ItemList from './Components/ItemList';
import ItemDetails, { Record } from './Components/ItemDetails';
import StarWarAPI from './services/sw-service';
import Row from './Containers/Row/Row';

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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className="stardb-app">
        <Header />

        <ItemList getData={getAllPeople} onItemSelected={() => {}}>
          {({ name }) => <span>{name}</span>}
        </ItemList>

        <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
          {({ name }) => <span>{name}</span>}
        </ItemList>
      </div>
    );
  }
}

export default App;
