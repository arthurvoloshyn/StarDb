import React from 'react';

import { details } from '../../utils';

import { withSwapiService } from '../../hocs/hoc-helpers';

import ItemDetails from '../../containers/item-details';

import Record from '../record';

const { planets } = details;

const PlanetDetails = props => (
  <ItemDetails {...props}>
    {planets.map(({ field, label }) => (
      <Record key={field} field={field} label={label} />
    ))}
  </ItemDetails>
);

const mapMethodsToProps = ({ getPlanet, getPlanetImage }) => ({
  getData: getPlanet,
  getImageUrl: getPlanetImage
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
