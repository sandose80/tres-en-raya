import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tile from './Tile';

const StyledTileRow = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const TileRow = ({ rowValues }) => (
  <StyledTileRow>{rowValues.map(v => <Tile value={v} />)}</StyledTileRow>
);

TileRow.propTypes = {
  rowValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TileRow;
