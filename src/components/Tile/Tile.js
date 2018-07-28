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
  margin-top: 16px;

  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

const Tile = ({ value }) => <StyledButton>{value}</StyledButton>;

Tile.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Tile;
