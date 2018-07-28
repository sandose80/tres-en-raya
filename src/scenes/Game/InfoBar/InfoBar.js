import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CurrentPlayer from './CurrentPlayer';
import GameStatus from './GameStatus';

const InfoBar = ({ currentPlayer, isGameOver = false, resetHandler }) => (
  <Fragment>
    <CurrentPlayer player={currentPlayer} isGameOver={isGameOver} />
    <GameStatus isGameOver={isGameOver} resetHandler={resetHandler} />
  </Fragment>
);

InfoBar.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  resetHandler: PropTypes.func.isRequired,
};

export default InfoBar;
