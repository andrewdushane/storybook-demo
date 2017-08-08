import React from 'react';
import PropTypes from 'prop-types';

const getBoxesStyle = (orientation, wrap) => ({
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',
  flexWrap: wrap ? 'wrap' : 'nowrap',
});

const getBoxStyle = (color, height) => ({
  boxSizing: 'border-box',
  margin: '2.5%',
  width: '20%',
  backgroundColor: color,
  height,
});

const Boxes = ({
  quantity,
  color,
  orientation,
  wrap,
  height,
}) => (
  <section style={getBoxesStyle(orientation, wrap)}>
    {[...Array(quantity)].map((_, i) => (
      <article className="box" style={getBoxStyle(color, height)} key={i} />
    ))}
  </section>
);

Boxes.propTypes = {
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  wrap: PropTypes.bool,
  height: PropTypes.number.isRequired,
}

export default Boxes;
