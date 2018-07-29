// src/scenes/Game/InfoBar/CurrentPlayer/CurrentPlayer.js

import React from 'react';
import PropTypes from 'prop-types';

// Función de utilidad para componer el mensaje;
// si la partida ha terminado, el jugador en 'player'
// es el ganador; si 'player' vale '-', entonces
// la partida ha terminado en tablas y no hay ganador

// TODO: refactorizar para integrarlo dentro del componente

const getMessage = (player, isGameOver) => {
  if (!isGameOver) {
    return `Es el turno de: ${player}`;
  }
  return player !== '-' ? `El ganador es ${player}` : 'No hay ganador';
};

// Componente para mostrar información del jugador

const CurrentPlayer = ({ player, isGameOver }) => (
  <p>{getMessage(player, isGameOver)}</p>
);

// PropTypes

CurrentPlayer.propTypes = {
  player: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

// Exports

export default CurrentPlayer;
