import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import StarshipDetails from '../hoc-components/starship-details';

const StarshipPage = ({
  match: {
    params: { id }
  }
}) => <StarshipDetails itemId={id} />;

StarshipPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

StarshipPage.defaultProps = {
  match: {
    params: {
      id: ''
    }
  }
};

export default withRouter(StarshipPage);
