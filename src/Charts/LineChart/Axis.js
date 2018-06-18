
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import PropTypes from 'prop-types';

export default class Axis extends Component {

    componentDidUpdate() { this.renderAxis(); };
    componentDidMount() { this.renderAxis(); };
    renderAxis = () => {
      let node = ReactDOM.findDOMNode(this);
      d3.select(node).call(this.props.axis);
  
    };
    render() {
  
      let translate = "translate(0," + (this.props.h) + ")";
  
      return (
        <g className="axis" transform={this.props.axisType === 'x' ? translate : ""} >
        </g>
      );
    }
  
  };

  Axis.propTypes= {
    h:PropTypes.number,
    axis:PropTypes.func,
    axisType:PropTypes.oneOf(['x','y'])

};