// src/scenes/Game/Board/Board.js

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TileRow from './TileRow';

// Componente para tablero de juego;
// recorremos las filas del tablero y delegamos
// en TileRow para que lo dibuje

// TODO: ver cómo crear una clave para cada fila
// sin utilizar 'index'

const Board = ({ rows, clickHandler }) => (
  <Fragment>
    {rows.map((row, index) => (
      <TileRow
        key={index}
        row={index}
        values={row}
        clickHandler={clickHandler}
      />
    ))}
  </Fragment>
);

// PropTypes

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

// Exports

export default Board;
