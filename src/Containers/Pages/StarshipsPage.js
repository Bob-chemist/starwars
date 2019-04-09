import React, { Component } from 'react';
import Row from '../Row';
import { StarshipList, StarshipDetails } from '../../Components/SWComponents';

export default class StarshipsPage extends Component {
  state = {
    selectedItem: 2,
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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
