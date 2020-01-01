import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../../context/swapi-service-context';

import Header from '../../components/header';
import ErrorBoundry from '../../components/error-boundry';
import StarshipDetails from '../../components/sw-components/starship-details';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../../components/pages';

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

  render() {
    const { isLoggedIn, swapiService } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Switch>
                <Route path="/" render={() => <h2 className="text-center">Welcome to StarDB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({
                    match: {
                      params: { id }
                    }
                  }) => <StarshipDetails itemId={id} />}
                />

                <Route path="/login" render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />

                <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />

                <Route render={() => <h2 className="text-center">Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
