import React from 'react';

import { SwapiServiceConsumer } from '../../context/swapi-service-context';

import { getDisplayName } from '../../utils';

const withSwapiService = mapMethodsToProps => Wrapped => {
  const withSwapiService = props => (
    <SwapiServiceConsumer>
      {swapiService => {
        const serviceProps = mapMethodsToProps(swapiService);

        return <Wrapped {...props} {...serviceProps} />;
      }}
    </SwapiServiceConsumer>
  );

  withSwapiService.displayName = `withSwapiService(${getDisplayName(Wrapped)})`;

  return withSwapiService;
};

export default withSwapiService;
