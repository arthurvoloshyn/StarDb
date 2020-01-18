import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getDisplayName } from '../../utils';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

const withData = View => {
  class withData extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      const { getData: prevPropsGetData } = prevProps;
      const { getData } = this.props;

      if (getData !== prevPropsGetData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      const { getData } = this.props;

      this.setState({
        loading: true,
        error: false
      });

      getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }

    render() {
      const { props } = this;
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...props} data={data} />;
    }
  }

  withData.defaultProps = {
    getData: () => {}
  };

  withData.propTypes = {
    getData: PropTypes.func
  };

  withData.displayName = `withData(${getDisplayName(View)})`;

  return withData;
};

export default withData;
