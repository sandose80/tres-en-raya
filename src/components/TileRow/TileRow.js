import React from 'react';
import styled from 'styled-components';
import { Tile } from '..';

const StyledTileRow = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const TileRow = () => (
  <StyledTileRow>
    <Tile />
    <Tile />
    <Tile />
  </StyledTileRow>
);

export default TileRow;
