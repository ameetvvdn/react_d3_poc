import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

export default class Grid extends Component {
  componentDidMount() { this.renderGrid(); }

  componentDidUpdate() { this.renderGrid(); }

  renderGrid() {
    const node = this.node;
    d3.select(node).call(this.props.grid);
  }

  render() {
    const translate = `translate(0, ${this.props.h})`;
    return (
      <g className="y-grid" ref={(node) => { this.node = node; }} transform={this.props.gridType === 'x' ? translate : null} />
    );
  }

}

Grid.propTypes = {
  h: PropTypes.number,
  grid: PropTypes.func,
  gridType: PropTypes.oneOf(['x', 'y']),
};
