import React, { Component } from 'react';
import ErrorIndicator from '../Components/ErrorIndicator';
import Loader from '../Components/Loader';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      getData()
        .then(data => {
          this.setState({
            data,
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

    render() {
      const { data, error, loading } = this.state;

      return (
        <>
          {error ? (
            <ErrorIndicator />
          ) : loading ? (
            <Loader />
          ) : (
            <View {...this.props} data={data} />
          )}
        </>
      );
    }
  };
};

export default withData;
