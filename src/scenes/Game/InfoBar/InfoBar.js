import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CurrentPlayer from './CurrentPlayer';
import GameStatus from './GameStatus';

const InfoBar = ({ currentPlayer, isGameOver = false }) => (
  <Fragment>
    <CurrentPlayer player={currentPlayer} />
    <GameStatus isGameOver={isGameOver} />
  </Fragment>
);

InfoBar.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default InfoBar;
