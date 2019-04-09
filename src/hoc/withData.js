import React, { Component } from 'react';
import ErrorIndicator from '../Components/ErrorIndicator';
import Loader from '../Components/Loader';

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props
        .getData()
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
