import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import ItemList from '../../components/item-list/item-list';
import Row from '../../components/row';
import ErrorBoundry from '../../components/error-boundry';

import ItemDetails from '../item-details/item-details';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1
  };

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    const { getAllPeople } = this.swapiService;
    const { selectedPerson } = this.state;
    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={getAllPeople}>
        {({ name, birthYear }) => `${name} (${birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
