import React from 'react';
import Boxes from './components/Boxes';

const App = () => (
  <Boxes
    quantity={4}
    color="grey"
    orientation="horizontal"
    wrap
    height={100}
  />
);

export default App;
