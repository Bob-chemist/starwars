import React from 'react';
import Row from '../Row';
import { PersonList, PersonDetails } from '../../Components/SWComponents';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
  return (
    <Row
      left={<PersonList onItemSelected={id => history.push(id)} />}
      right={<PersonDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PeoplePage);
