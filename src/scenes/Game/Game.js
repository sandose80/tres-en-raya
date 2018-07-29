// src/scenes/Game/Game.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Board from './Board';
import InfoBar from './InfoBar';

// Componente genérico para crear columnas de contenido

import { Column } from '../../components';

// Contenedor para la escena Game;
// mostrar los componentes que contiene en horizontal

const StyledGameFrame = styled.div`
  display: flex;
  flex-direction: row;
`;

// Componente para la escena Game;
// contiene dos columnas: tablero y barra lateral
// para la información;
// delega en Board e InfoBar para que se encarguen
// de pintar los contenidos

const Game = ({
  board, player, isGameOver, clickHandler, resetHandler,
}) => (
  <StyledGameFrame>
    <Column>
      <Board rows={board} clickHandler={clickHandler} />
    </Column>
    <Column>
      <InfoBar
        currentPlayer={player}
        isGameOver={isGameOver}
        resetHandler={resetHandler}
      />
    </Column>
  </StyledGameFrame>
);

// PropTypes

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  player: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  resetHandler: PropTypes.func.isRequired,
};

// Exports

export default Game;
