import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Tile } from '..';

const StyledRow = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const Board = () => (
  <Fragment>
    <StyledRow>
      <Tile />
      <Tile />
      <Tile />
    </StyledRow>
    <StyledRow>
      <Tile />
      <Tile />
      <Tile />
    </StyledRow>
    <StyledRow>
      <Tile />
      <Tile />
      <Tile />
    </StyledRow>
  </Fragment>
);

export default Board;
