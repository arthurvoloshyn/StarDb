import React from 'react';
import PropTypes from 'prop-types';

import { withData } from '../../hocs/hoc-helpers';

import SwapiService from '../../services/swapi-service';

import './item-list.css';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item" key={id} onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
