import React, { Component } from 'react';
import './App.scss';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';

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
