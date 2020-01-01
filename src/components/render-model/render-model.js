import React from 'react';
import PropTypes from 'prop-types';

const RenderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

RenderModelAndName.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string
};

RenderModelAndName.defaultProps = {
  model: '',
  name: ''
};

export default RenderModelAndName;
