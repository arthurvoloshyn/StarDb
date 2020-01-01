import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!!!</h3>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

SecretPage.propTypes = {
  isLoggedIn: PropTypes.bool
};

SecretPage.defaultProps = {
  isLoggedIn: false
};

export default SecretPage;
