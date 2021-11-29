import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';

import { idPlanet } from '../../utils';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import PlanetView from '../../components/planet-view';

import './random-planet.css';

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      error: false
    });
  };

  onError = err => {
    this.setState({
      error: true
    });

    throw new Error(err);
  };

  updatePlanet = async () => {
    try {
      const planet = await this.swapiService.getPlanet(idPlanet);
      this.onPlanetLoaded(planet);
    } catch (err) {
      this.onError(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    return (
      <div className="random-planet jumbotron rounded">
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {hasData && <PlanetView planet={planet} />}
      </div>
    );
  }
}

export default RandomPlanet;
