import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Board from './Board';

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
    <Column>Barra info</Column>
  </StyledGameFrame>
);

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Game;
