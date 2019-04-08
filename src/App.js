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
    if (this.state.hasError) return <ErrorIndicator />;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageURL={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageURL={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className={classes.App}>
        <Header />
        {/* {this.state.showRandomPlanet ? <RandomPlanet /> : null}

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

        <PeoplePage /> */}

        <Row left={personDetails} right={starshipDetails} />
        {/*
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            >
              {({ name, model }) => `${name} - ${model}`}
            </ItemList>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
