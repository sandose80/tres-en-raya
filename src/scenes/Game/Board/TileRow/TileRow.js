// src/scenes/Game/Board/TileRow/TileRow.js

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tile from './Tile';

// Fila de celdas del tablero;
// adaptamos un div

const StyledTileRow = styled.div`
  clear: both;
  content: '';
  display: table;
`;

// Componente para cada fila del tablero

// Construimos la fila de celdas recorriendo
// los valores de la fila del tablero que nos pasan;
// asignamos la funcionalidad para el click;

// TODO: ver como podemos crear una clave para la celda
// sin utilizar el 'index'

const TileRow = ({ row, values, clickHandler }) => (
  <StyledTileRow>
    {values.map((value, index) => (
      <Tile
        key={row * 10 + index}
        row={row}
        column={index}
        value={value}
        clickHandler={clickHandler}
      />
    ))}
  </StyledTileRow>
);

// PropTypes

TileRow.propTypes = {
  row: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

// Exports

export default TileRow;
