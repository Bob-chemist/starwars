import React, { Component } from 'react';
import ErrorIndicator from '../../Components/ErrorIndicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    return this.state.hasError ? <ErrorIndicator /> : this.props.children;
  }
}
