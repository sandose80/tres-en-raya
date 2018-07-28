import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  padding: 0;
  height: 60px;
  width: 60px;
  margin-right: 16px;
  margin-bottom: 16px;

  /* font-size: 50px; */
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const Tile = ({
  row, column, value, clickHandler,
}) => (
  <StyledButton onClick={() => clickHandler(row, column)}>
    R:{row}, C:{column}, V:{value}
  </StyledButton>
);

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Tile;
