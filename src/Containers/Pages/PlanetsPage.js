import React, { useState } from 'react';
import Row from '../Row';
import { PlanetList, PlanetDetails } from '../../Components/SWComponents';

const PlanetsPage = () => {
  const [selectedItem, setSelectedItem] = useState(5);

  return (
    <Row
      left={<PlanetList onItemSelected={setSelectedItem} />}
      right={<PlanetDetails itemId={selectedItem} />}
    />
  );
};

export default PlanetsPage;
