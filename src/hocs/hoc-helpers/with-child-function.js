import React from 'react';

const withChildFunction = (fn) => (Wrapped) => (props => (
  <Wrapped {...props}>
    {fn}
  </Wrapped>
));

export default withChildFunction;
