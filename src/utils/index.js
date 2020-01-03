export const idPlanet = Math.floor(Math.random() * 17) + 2;

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const getDisplayName = ({ displayName, name }) => displayName || name || 'Component';
