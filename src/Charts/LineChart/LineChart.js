import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

import Grid from './Grid';
import Dots from '../Utils/Dots';
import Axis from './Axis';
import ToolTip from '../Utils/Tooltip';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: { display: false, data: { key: '', value: '' } },
    };
  }

  showToolTip(e) {
    e.target.setAttribute('fill', '#FFFFFF');

    this.setState({
      tooltip: {
        display: true,
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value'),
        },
        pos: {
          x: e.target.getAttribute('cx'),
          y: e.target.getAttribute('cy'),
        },
      },
    });
  }

  hideToolTip(e) {
    e.target.setAttribute('fill', '#7dc7f4');
    this.setState({ tooltip: { display: false, data: { key: '', value: '' } } });
  }

  render() {
    const data = [
      { day: '02-11-2016', count: 180 },
      { day: '02-12-2016', count: 250 },
      { day: '02-13-2016', count: 150 },
      { day: '02-14-2016', count: 496 },
      { day: '02-15-2016', count: 140 },
      { day: '02-16-2016', count: 380 },
      { day: '02-17-2016', count: 100 },
      { day: '02-18-2016', count: 150 },
    ];

    const margin = { top: 5, right: 50, bottom: 20, left: 50 };
    const w = this.props.width - (margin.left + margin.right);
    const h = this.props.height - (margin.top + margin.bottom);
    const parseDate = d3.timeParse('%m-%d-%Y');

/* eslint no-param-reassign:
["error", { "props": true, "ignorePropertyModificationsFor": ["d"] }] */
    data.forEach((d) => {
      d.date = parseDate(d.day);
    });

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => (
        d.date
      )))
      .rangeRound([0, w]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => (
        d.count + 100
      ))])
      .range([h, 0]);

    const yAxis = d3.axisLeft(y)
      .ticks(5);

    const xAxis = d3.axisBottom(x)
      .tickValues(data.map((d, i) => {
        if (i > 0) {
          return d.date;
        }
        return false;
      }).splice(1))
      .ticks(4);

    const yGrid = d3.axisLeft(y)
      .ticks(5)
      .tickSize(-w, 0, 0)
      .tickFormat('');


    const interpolations = [
      d3.curveLinear,
      d3.curveStepBefore,
      d3.curveStepAfter,
      d3.curveBasis,
      d3.curveBasisClosed,
      d3.curveCardinal,
      d3.curveCardinalClosed];

    const line = d3.line()
      .x(d => (
        x(d.date)
      ))
      .y(d => (
        y(d.count)
      )).curve(interpolations[5]);

    const transform = `translate( ${margin.left}, ${margin.top})`;

    return (
      <div>
        <svg
          id={this.props.chartId}
          width={this.props.width}
          height={this.props.height}
        >

          <g transform={transform}>

            <Grid h={h} grid={yGrid} gridType="y" />

            <Axis h={h} axis={yAxis} axisType="y" />
            <Axis h={h} axis={xAxis} axisType="x" />

            <path className="line shadow" d={line(data)} strokeLinecap="round" />

            <Dots
              data={data}
              x={x}
              y={y}
              showToolTip={this.showToolTip}
              hideToolTip={this.hideToolTip}
            />

            <ToolTip tooltip={this.state.tooltip} />
          </g>

        </svg>


      </div>
    );
  }
}

LineChart.defaultProps = {
  width: 800,
  height: 300,
  chartId: 'v1_chart',
};

LineChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  chartId: PropTypes.string,
};
