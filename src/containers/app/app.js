import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../../context/swapi-service-context';

import Header from '../../components/header';
import ErrorBoundary from '../../components/error-boundary';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage, HomePage, NotFound, StarshipPage } from '../../components/pages';

import RandomPlanet from '../random-planet';

import './app.css';

class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  renderLoginPage = () => {
    const { isLoggedIn } = this.state;
    return <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />;
  };

  renderSecret = () => {
    const { isLoggedIn } = this.state;
    return <SecretPage isLoggedIn={isLoggedIn} />;
  };

  render() {
    const { swapiService } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={HomePage} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id" render={StarshipPage} />
                <Route path="/login" render={this.renderLoginPage} />
                <Route path="/secret" render={this.renderSecret} />
                <Route render={NotFound} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
