import React, { Component } from 'react';
import ErrorIndicator from '../../Components/ErrorIndicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: null,
  };

  componentDidCatch(error) {
    this.setState({
      hasError: error,
    });
  }

  render() {
    return this.state.hasError ? (
      <ErrorIndicator info={this.state.hasError} />
    ) : (
      this.props.children
    );
  }
}
