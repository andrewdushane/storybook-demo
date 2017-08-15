import React from 'react';
import PropTypes from 'prop-types';

const padding = '1%';

const boxesStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingLeft: padding,
  paddingRight: padding,
  paddingBottom: padding,
  paddingTop: padding,
};

const getBoxStyle = ({ maxPerRow, color, height }) => ({
  boxSizing: 'border-box',
  marginBottom: '1%',
  backgroundColor: color,
  width: `${98 / maxPerRow}%`,
  height,
});

const Boxes = ({ quantity, ...rest }) => (
  <section style={boxesStyle}>
    {[...Array(quantity)].map((_, i) => (
      <article className="box" style={getBoxStyle(rest)} key={i} />
    ))}
  </section>
);

Boxes.propTypes = {
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  maxPerRow: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Boxes;
