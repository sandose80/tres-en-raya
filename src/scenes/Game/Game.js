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

const Game = ({ board }) => (
  <StyledGameFrame>
    <Column>
      <Board rows={board} />
    </Column>
    <Column>
      <InfoBar currentPlayer="Jero" isGameOver />
    </Column>
  </StyledGameFrame>
);

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Game;
