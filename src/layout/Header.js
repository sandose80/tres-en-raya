import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DiceThree } from 'styled-icons/fa-solid';

const StyledHeader = styled.header`
  background: yellow;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  /* justify-content: space-between; */
`;

const StyledLogo = styled(DiceThree)`
  display: inline-block;
  padding-right: 12px;
  width: 36px;
  height: 36px;
`;

const StyledH1 = styled.h1`
  font-size: 18px;
`;

const Header = ({ appTitle }) => (
  <StyledHeader>
    <StyledLogo />
    <StyledH1>{appTitle}</StyledH1>
  </StyledHeader>
);

Header.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

export default Header;
