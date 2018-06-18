
import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes/Axes'
import Bars from './Bars/Bars'

const data = [
    { title: 'Terminator', value: 21, year: 1984 },
    { title: 'Commando', value: 81, year: 1985 },
    { title: 'Predator', value: 25, year: 1987 },
    { title: 'Raw Deal', value: 26, year: 1986 },
    { title: 'The Running Man', value: 11, year: 1987 },
    { title: 'Total Recall', value: 44, year: 1990 },
    { title: 'Terminator 2', value: 0, year: 1991 },
    { title: 'Last Action Hero', value: 22, year: 1993 },
    { title: 'True Lies', value: 51, year: 1994 },
    { title: 'Eraser', value: 29, year: 1996 },
    { title: 'Terminator 3', value: 2, year: 2003 },
  ];

//   const data = [
//     { day: '02-11-2016', count: 180 },
//     { day: '02-12-2016', count: 250 },
//     { day: '02-13-2016', count: 150 },
//     { day: '02-14-2016', count: 496 },
//     { day: '02-15-2016', count: 140 },
//     { day: '02-16-2016', count: 380 },
//     { day: '02-17-2016', count: 100 },
//     { day: '02-18-2016', count: 150 }
//   ];
  

export default class BarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    const svgDimensions = { width: 800, height: 500 };

    const maxValue = Math.max(...data.map(d => d.value));
    
    // scaleBand type
    const xScale = this.xScale
      .padding(0.5)
      // scaleBand domain should be an array of specific values
      // in our case, we want to use movie titles
      .domain(data.map(d => d.title))
      .range([margins.left, svgDimensions.width - margins.right])
  
     // scaleLinear type
    const yScale = this.yScale
       // scaleLinear domain required at least two values, min and max       
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
        <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}