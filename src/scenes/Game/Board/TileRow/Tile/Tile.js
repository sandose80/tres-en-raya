// src/scenes/Game/Board/TileRow/Tile/Tile.js

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Celda por defecto vacía;
// contiene el estilo base para las celdas
// específicas para los jugadores

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  padding: 0;
  height: 60px;
  width: 60px;
  margin-right: 16px;
  margin-bottom: 16px;

  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

// Celdas de color para los jugadores

const StyledBlueButton = styled(StyledButton)`
  background: blue;
`;

const StyledRedButton = styled(StyledButton)`
  background: red;
`;

// Componente para la celda del tablero

const Tile = ({
  row, column, value, clickHandler,
}) => {
  if (value === 'X') {
    return (
      <StyledRedButton onClick={() => clickHandler(row, column)}>
        {value}
      </StyledRedButton>
    );
  }
  if (value === 'O') {
    return (
      <StyledBlueButton onClick={() => clickHandler(row, column)}>
        {value}
      </StyledBlueButton>
    );
  }
  return (
    <StyledButton onClick={() => clickHandler(row, column)}>
      {value}
    </StyledButton>
  );
};

// TypeProps

Tile.defaultProps = {
  value: '-',
};

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  value: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

// Exports

export default Tile;
