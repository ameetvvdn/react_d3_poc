import React, { Component } from 'react';
import './App.scss';
import LineChart from './Charts/LineChart/LineChart';
import BarChart from './Charts/BarChart/BarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChart />
        <BarChart />
      </div>
    );
  }
}

export default App;
