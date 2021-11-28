class DummySwapiService {
  _people = [
    {
      id: '1',
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },
    {
      id: '2',
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

  _planets = [
    {
      id: '1',
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: '2',
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: '1',
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    },
    {
      id: '2',
      name: 'Grumman F-14 Tomcat [TEST DATA]',
      model: 'F-14B',
      manufacturer: 'Grumman Corporation',
      costInCredits: 'not known',
      length: 'approx 19.1 meters',
      crew: 2,
      passengers: 1,
      cargoCapacity: 6576
    }
  ];

  getAllPeople = async () => this._people;

  getPerson = async index => this._people[index - 1];

  getAllPlanets = async () => this._planets;

  getPlanet = async index => this._planets[index - 1];

  getAllStarships = async () => this._starships;

  getStarship = async index => this._starships[index - 1];

  getPersonImage = () => 'https://placeimg.com/400/500/people';

  getStarshipImage = () => 'https://placeimg.com/600/400/tech';

  getPlanetImage = () => 'https://placeimg.com/400/400/nature';
}

export default DummySwapiService;
