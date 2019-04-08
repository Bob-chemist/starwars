import React, { Component } from 'react';
import ItemList from '../../Components/ItemList';
import PersonDetails from '../../Components/ItemDetails';
import StarWarAPI from '../../services/sw-service';
import Row from '../Row/Row';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

export default class PeoplePage extends Component {
  swapiService = new StarWarAPI();
  state = {
    selectedPerson: 1,
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
    );

    const personDetail = <PersonDetails itemId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetail} />
      </ErrorBoundry>
    );
  }
}
