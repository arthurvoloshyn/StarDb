import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components';

const StarshipsPage = ({ history: { push } }) => {
  return <StarshipList onItemSelected={id => push(id)} />;
};

StarshipsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

StarshipsPage.defaultProps = {
  history: {
    push: () => {}
  }
};

export default withRouter(StarshipsPage);
