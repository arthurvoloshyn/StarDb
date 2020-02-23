export default class SwapiService {
  apiBase = 'https://swapi.co/api';
  imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async url => {
    const res = await fetch(`${this.apiBase}${url}`);
    const { status, ok } = res;

    if (!ok) {
      throw new Error(`Could not fetch ${url}, received ${status}`);
    }

    const data = await res.json();

    return data;
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    const { results } = res;
    return results.map(this._transformPerson).slice(0, 5);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    const { results } = res;
    return results.map(this._transformPlanet).slice(0, 5);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    const { results } = res;
    return results.map(this._transformStarship).slice(0, 5);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => `${this.imageBase}/characters/${id}.jpg`;

  getStarshipImage = ({ id }) => `${this.imageBase}/starships/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this.imageBase}/planets/${id}.jpg`;

  _extractId = ({ url }) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  };

  _transformPlanet = planet => {
    const { name, population, rotation_period: rotationPeriod, diameter } = planet;

    return {
      id: this._extractId(planet),
      name,
      population,
      rotationPeriod,
      diameter
    };
  };

  _transformStarship = starship => {
    const { name, model, manufacturer, cost_in_credits: costInCredits, length, crew, passengers, cargo_capacity: cargoCapacity } = starship;

    return {
      id: this._extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity
    };
  };

  _transformPerson = person => {
    const { name, gender, birth_year: birthYear, eye_color: eyeColor } = person;

    return {
      id: this._extractId(person),
      name,
      gender,
      birthYear,
      eyeColor
    };
  };
}
