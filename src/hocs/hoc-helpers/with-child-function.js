import React from 'react';

import { getDisplayName } from '../../utils';

const withChildFunction = fn => Wrapped => {
  const withChildFunction = props => <Wrapped {...props}>{fn}</Wrapped>;

  withChildFunction.displayName = `withChildFunction(${getDisplayName(Wrapped)})`;

  return withChildFunction;
};

export default withChildFunction;
