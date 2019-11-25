import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
          <li><NavLink activeClassName='active-link' to="/people/">People</NavLink></li>
          <li><NavLink activeClassName='active-link' to="/planets/">Planets</NavLink></li>
          <li><NavLink activeClassName='active-link' to="/starships/">Starships</NavLink></li>
          <li><NavLink activeClassName='active-link' to="/login">Login</NavLink></li>
          <li><NavLink activeClassName='active-link' to="/secret">Secret</NavLink></li>
      </ul>

      <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        Change Service
      </button>
    </div>
  );
};

export default Header;
