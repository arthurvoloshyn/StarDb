import React, { Component } from 'react';

class ErrorButton extends Component {
  state = {
    renderError: false
  };

  renderError = () => {
    this.setState({ renderError: true });
  };

  render() {
    const { renderError } = this.state;
    if (renderError) {
      throw new Error('Error!');
    }

    return (
      <button className="error-button btn btn-danger btn-lg" onClick={this.renderError}>
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
