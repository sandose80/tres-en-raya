import React from 'react';
import PropTypes from 'prop-types';
import CurrentPlayer from './CurrentPlayer';

const InfoBar = ({ currentPlayer, isGameOver = false }) => (
  <div>
    <CurrentPlayer player={currentPlayer} />
    <p>Botón para reiniciar</p>
  </div>
);

InfoBar.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default InfoBar;
