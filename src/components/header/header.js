import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { pages } from '../../constants';

import './header.css';

const Header = ({ onServiceChange }) => (
  <div className="header d-flex">
    <h3>
      <Link to="/">StarDB</Link>
    </h3>

    <ul className="d-flex">
      {pages.map(({ link, title }) => (
        <li key={title}>
          <NavLink activeClassName="active-link" to={link}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>

    <button onClick={onServiceChange} className="btn btn-primary btn-sm">
      Change Service
    </button>
  </div>
);

Header.propTypes = {
  onServiceChange: PropTypes.func
};

Header.defaultProps = {
  onServiceChange: () => {}
};

export default Header;
