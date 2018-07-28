import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  padding: 0;
  height: 60px;
  width: 60px;
  margin-right: -1px;
  margin-top: -1px;

  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

const Tile = () => <StyledButton>X</StyledButton>;

export default Tile;
