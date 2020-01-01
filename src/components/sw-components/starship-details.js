import React from 'react';

import { details } from '../../utils';

import { withSwapiService } from '../../hocs/hoc-helpers';

import ItemDetails from '../../containers/item-details';

import Record from '../record';

const { starships } = details;

const StarshipDetails = props => (
  <ItemDetails {...props}>
    {starships.map(({ field, label }) => (
      <Record key={field} field={field} label={label} />
    ))}
  </ItemDetails>
);

const mapMethodsToProps = ({ getStarship, getStarshipImage }) => ({
  getData: getStarship,
  getImageUrl: getStarshipImage
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
