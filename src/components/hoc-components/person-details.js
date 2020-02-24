import React from 'react';

import { details } from '../../constants';

import { withSwapiService } from '../../hocs/hoc-helpers';

import ItemDetails from '../../containers/item-details';

import Record from '../record';

const { persons } = details;

const PersonDetails = props => (
  <ItemDetails {...props}>
    {persons.map(({ field, label }) => (
      <Record key={field} field={field} label={label} />
    ))}
  </ItemDetails>
);

const mapMethodsToProps = ({ getPerson, getPersonImage }) => ({
  getData: getPerson,
  getImageUrl: getPersonImage
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
