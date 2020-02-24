import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { PersonDetails, PersonList } from '../hoc-components';
import Row from '../row';

const PeoplePage = ({
  history: { push },
  match: {
    params: { id }
  }
}) => <Row left={<PersonList onItemSelected={id => push(id)} />} right={<PersonDetails itemId={id} />} />;

PeoplePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

PeoplePage.defaultProps = {
  history: {
    push: () => {}
  },
  match: {
    params: {
      id: ''
    }
  }
};

export default withRouter(PeoplePage);
