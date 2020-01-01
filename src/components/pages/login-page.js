import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  onLogin: PropTypes.func
};

LoginPage.defaultProps = {
  isLoggedIn: false,
  onLogin: () => {}
};

export default LoginPage;
