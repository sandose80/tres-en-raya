import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tile from './Tile';

const StyledTileRow = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const TileRow = ({ row, values, clickHandler }) => (
  <StyledTileRow>
    {values.map((value, index) => (
      <Tile
        key={row * 10 + index}
        row={row}
        column={index}
        value={value}
        clickHandler={clickHandler}
      />
    ))}
  </StyledTileRow>
);

TileRow.propTypes = {
  row: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default TileRow;
