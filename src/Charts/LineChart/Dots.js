
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import PropTypes from 'prop-types';

//   propTypes= {
//     data: PropTypes.array,
//     x: PropTypes.func,
//     y: PropTypes.func

//   },
export default class Dots extends Component {

    render() {
  
      let _self = this;
  
      //remove last & first point
      let data = this.props.data.splice(1);
      data.pop();
  
      let circles = data.map((d, i) => {
  
        return (<circle className="dot" r="7" cx={_self.props.x(d.date)} cy={_self.props.y(d.count)} fill="#7dc7f4"
          stroke="#3f5175" strokeWidth="5px" key={i}
          onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
          data-key={d3.timeFormat("%b %e")(d.date)} data-value={d.count} />)
      });
  
      return (
        <g>
          {circles}
        </g>
      );
    }
  };