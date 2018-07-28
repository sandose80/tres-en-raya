import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tile from './Tile';

const StyledTileRow = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const TileRow = ({ row, values }) => (
  <StyledTileRow>
    {values.map((value, index) => <Tile row={row} column={index} value={value} />)}
  </StyledTileRow>
);

TileRow.propTypes = {
  row: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TileRow;
