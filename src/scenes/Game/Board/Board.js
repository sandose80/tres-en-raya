import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TileRow from './TileRow';

const Board = ({ rows, clickHandler }) => (
  <Fragment>
    {rows.map((row, index) => (
      <TileRow key={index} row={index} values={row} clickHandler={clickHandler} />
    ))}
  </Fragment>
);

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Board;
