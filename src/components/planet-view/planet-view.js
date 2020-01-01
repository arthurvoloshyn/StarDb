import React from 'react';
import PropTypes from 'prop-types';

const PlanetView = ({ planet: { id, name, population, rotationPeriod, diameter } }) => (
  <React.Fragment>
    <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </React.Fragment>
);

PlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.string,
    rotationPeriod: PropTypes.string,
    diameter: PropTypes.string
  })
};

PlanetView.defaultProps = {
  planet: {
    id: '',
    name: '',
    population: '',
    rotationPeriod: '',
    diameter: ''
  }
};

export default PlanetView;
