import React, { Component } from 'react';
import classes from './PeoplePage.module.sass';
import ItemList from '../../Components/ItemList';
import PersonDetails from '../../Components/PersonDetails';
import ErrorIndicator from '../../Components/ErrorIndicator';
import StarWarAPI from '../../services/sw-service';

export default class PeoplePage extends Component {
  swapiService = new StarWarAPI();
  state = {
    selectedPerson: 1,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className={`row mb2 ${classes.PeoplePage}`}>
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
