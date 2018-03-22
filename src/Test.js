import React from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import Filters from './components/Filters';

const Test = () => (
  <div className="testContainer">
      <Filters />
      <RemineTable properties={[]} />
  </div>
)

export default Test;
