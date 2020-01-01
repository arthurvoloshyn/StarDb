export const idPlanet = Math.floor(Math.random() * 17) + 2;

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const getDisplayName = ({ displayName, name }) => displayName || name || 'Component';

export const pages = [
  {
    link: '/people/',
    title: 'People'
  },
  {
    link: '/planets/',
    title: 'Planets'
  },
  {
    link: '/starships/',
    title: 'Starships'
  },
  {
    link: '/login/',
    title: 'Login'
  },
  {
    link: '/secret/',
    title: 'Secret'
  }
];

export const details = {
  persons: [
    {
      field: 'gender',
      label: 'Gender'
    },
    {
      field: 'eyeColor',
      label: 'Eye Color'
    }
  ],
  planets: [
    {
      field: 'population',
      label: 'Population'
    },
    {
      field: 'rotationPeriod',
      label: 'Rotation Period'
    },
    {
      field: 'diameter',
      label: 'Diameter'
    }
  ],
  starships: [
    {
      field: 'model',
      label: 'Model'
    },
    {
      field: 'length',
      label: 'Length'
    },
    {
      field: 'costInCredits',
      label: 'Cost'
    }
  ]
};
