import React from 'react';
import PropTypes from 'prop-types';
import { Board } from '../../components';

const Game = ({ board }) => <Board rows={board} />;

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Game;
