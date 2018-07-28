import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TileRow from './TileRow';

const Board = ({ rows }) => (
  <Fragment>{rows.map((row, index) => <TileRow row={index} values={row} />)}</Fragment>
);

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Board;
