import React, { Component } from 'react';
import classes from './PersonDetails.module.sass';
import StarWarAPI from '../../services/sw-service';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';
import PersonDetailView from './PersonDetailView';

export default class PersonDetails extends Component {
  swapiService = new StarWarAPI();

  state = {
    person: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false,
        });
      })
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  renderPerson = () => {};

  render() {
    const { loading, error, person } = this.state;
    return (
      <div className={`${classes.PersonDetails} card`}>
        {error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Loader />
        ) : (
          <PersonDetailView person={person} />
        )}
      </div>
    );
  }
}
