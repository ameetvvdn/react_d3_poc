import React from 'react';
import './App.scss';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';

const App = () => (
  <div className="App">
    <LineChart />
    <BarChart />
  </div>
);


export default App;
