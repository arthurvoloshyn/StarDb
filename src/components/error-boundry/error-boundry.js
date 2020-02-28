import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator/error-indicator';

class ErrorBoundry extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static defaultProps = {
    children: null
  };

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return children;
  }
}

export default ErrorBoundry;
