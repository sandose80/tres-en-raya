// src/scenes/Game/InfoBar/GameStatus/GameStatus.js

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'rebass';

// Componente para mostrar el estado del juego;
// muestra un botón para reiniciar el juego solo si
// la partida ha terminado

const GameStatus = ({ isGameOver = false, resetHandler }) => (isGameOver ? (
  <Fragment>
    <Text>Juego terminado</Text>
    <Button my={3} onClick={() => resetHandler()}>
        Reiniciar
    </Button>
  </Fragment>
) : (
  <Text>Jugando...</Text>
));

// PropTypes

GameStatus.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  resetHandler: PropTypes.func.isRequired,
};

// Exports

export default GameStatus;
