import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Board from './Board';
import InfoBar from './InfoBar';

import { Column } from '../../components';

const StyledGameFrame = styled.div`
  display: flex;
  flex-direction: row;
`;

const Game = ({
  board, player, isGameOver, clickHandler,
}) => (
  <StyledGameFrame>
    <Column>
      <Board rows={board} clickHandler={clickHandler} />
    </Column>
    <Column>
      <InfoBar currentPlayer={player} isGameOver={isGameOver} />
    </Column>
  </StyledGameFrame>
);

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  player: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Game;
