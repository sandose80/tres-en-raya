// src/scenes/Game/InfoBar/InfoBar.js

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CurrentPlayer from './CurrentPlayer';
import GameStatus from './GameStatus';

// Componente para mostrar la barra lateral de información;
// delega en los componentes CurrentPlayer y GameStatus para
// que se encarguen de mostrar la información

const InfoBar = ({ currentPlayer, isGameOver = false, resetHandler }) => (
  <Fragment>
    <CurrentPlayer player={currentPlayer} isGameOver={isGameOver} />
    <GameStatus isGameOver={isGameOver} resetHandler={resetHandler} />
  </Fragment>
);

// PropTypes

InfoBar.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  resetHandler: PropTypes.func.isRequired,
};

// Exports

export default InfoBar;
