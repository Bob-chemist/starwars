import React, { Component } from 'react';
import Row from '../Row';
import { PlanetList, PlanetDetails } from '../../Components/SWComponents';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: 5,
  };

  onItemSelected = selectedItem => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
