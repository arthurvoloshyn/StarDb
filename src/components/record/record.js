import React from 'react';
import PropTypes from 'prop-types';

const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

Record.propTypes = {
  item: PropTypes.object,
  field: PropTypes.string.isRequired,
  label: PropTypes.string
};

Record.defaultProps = {
  item: {},
  label: ''
};

export default Record;
