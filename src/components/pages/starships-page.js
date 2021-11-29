import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../hoc-components';

const StarshipsPage = ({ history }) => {
  const handleItemSelected = id => history.push(id);
  return <StarshipList onItemSelected={handleItemSelected} />;
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
