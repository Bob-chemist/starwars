import React from 'react';
import ItemList from '../ItemList';
import withData from '../../hoc/withData';
import StarWarAPI from '../../services/sw-service';

const swapiService = new StarWarAPI();

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>{`${name} (${model})`}</span>
);

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
