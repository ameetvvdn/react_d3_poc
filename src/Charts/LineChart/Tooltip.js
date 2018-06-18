
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import PropTypes from 'prop-types';

export default class ToolTip extends Component {

  render() {

    let visibility = "hidden";
    let transform = "";
    let x = 0;
    let y = 0;
    let width = 150, height = 70;
    let transformText = 'translate(' + width / 2 + ',' + (height / 2 - 5) + ')';
    let transformArrow = "";

    if (this.props.tooltip.display === true) {
      let position = this.props.tooltip.pos;

      x = position.x;
      y = position.y;
      visibility = "visible";


      if (y > height) {
        transform = 'translate(' + (x - width / 2) + ',' + (y - height - 20) + ')';
        transformArrow = 'translate(' + (width / 2 - 20) + ',' + (height - 2) + ')';
      } else if (y < height) {

        transform = 'translate(' + (x - width / 2) + ',' + (Math.round(y) + 20) + ')';
        transformArrow = 'translate(' + (width / 2 - 20) + ',' + 0 + ') rotate(180,20,0)';
      }



    } else {
      visibility = "hidden"
    }

    return (
      <g transform={transform}>
        <rect className="shadow" width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#6391da" opacity=".9" />
        <polygon className="shadow" points="10,0  30,0  20,10" transform={transformArrow}
          fill="#6391da" opacity=".9" visibility={visibility} />
        <text visibility={visibility} transform={transformText}>
          <tspan x="0" textAnchor="middle" fontSize="15px" fill="#ffffff">{this.props.tooltip.data.key}</tspan>
          <tspan x="0" textAnchor="middle" dy="25" fontSize="20px" fill="#a9f3ff">{this.props.tooltip.data.value + " visits"}</tspan>
        </text>
      </g>
    );
  }
};

ToolTip.propTypes= {
  tooltip: PropTypes.object
};
