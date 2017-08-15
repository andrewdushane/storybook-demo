import React from 'react';
import Boxes from './components/Boxes';

const App = () => (
  <Boxes
    quantity={8}
    maxPerRow={4}
    color="grey"
    height={100}
  />
);

export default App;
