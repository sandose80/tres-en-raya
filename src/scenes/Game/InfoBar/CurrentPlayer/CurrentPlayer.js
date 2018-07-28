import React from 'react';
import PropTypes from 'prop-types';

const getMessage = (player, isGameOver) => {
  if (!isGameOver) {
    return `Es el turno de: ${player}`;
  }
  return player !== '-' ? `El ganador es ${player}` : 'No hay ganador';
};

const CurrentPlayer = ({ player, isGameOver }) => (
  <p>{getMessage(player, isGameOver)}</p>
);

CurrentPlayer.propTypes = {
  player: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default CurrentPlayer;
