import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

const Dots = ({ data, x, y, showToolTip, hideToolTip }) => {
  // const self = props;
  // remove last & first point
  const newData = data.splice(1);
  newData.pop();
  const circles = newData.map(d => (
    <circle
      className="dot"
      r="7"
      cx={x(d.date)}
      cy={y(d.count)}
      fill="#7dc7f4"
      stroke="#3f5175"
      strokeWidth="5px"
      key={d.date}
      onMouseOver={showToolTip}
      onMouseOut={hideToolTip}
      data-key={d3.timeFormat('%b %e')(d.date)}
      data-value={d.count}
    />
  ));

  return (
    <g>
      {circles}
    </g>
  );
};

Dots.propTypes = {
  data: PropTypes.array,
  x: PropTypes.func,
  y: PropTypes.func,
  hideToolTip: PropTypes.func,
  showToolTip: PropTypes.func,
};

export default Dots;
