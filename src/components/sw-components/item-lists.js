import { withData, withSwapiService, withChildFunction, compose } from '../../hocs/hoc-helpers';

import ItemList from '../item-list';
import RenderName from '../render-name';
import RenderModelAndName from '../render-model';

const mapPersonMethodsToProps = ({ getAllPeople }) => ({ getData: getAllPeople });

const mapPlanetMethodsToProps = ({ getAllPlanets }) => ({ getData: getAllPlanets });

const mapStarshipMethodsToProps = ({ getAllStarships }) => ({ getData: getAllStarships });

const PersonList = compose(withSwapiService(mapPersonMethodsToProps), withData, withChildFunction(RenderName))(ItemList);

const PlanetList = compose(withSwapiService(mapPlanetMethodsToProps), withData, withChildFunction(RenderName))(ItemList);

const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps), withData, withChildFunction(RenderModelAndName))(ItemList);

export { PersonList, PlanetList, StarshipList };
