import React from 'react';
import PropTypes from 'prop-types';

const RenderName = ({ name }) => <span>{name}</span>;

RenderName.propTypes = {
  name: PropTypes.string
};

RenderName.defaultProps = {
  name: ''
};

export default RenderName;
