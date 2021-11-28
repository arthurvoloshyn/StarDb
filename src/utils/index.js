export const idPlanet = Math.floor(Math.random() * 17) + 2;

export const getDisplayName = ({ displayName, name }) => displayName || name || 'Component';
