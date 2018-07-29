// src/layout/Header.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DiceThree } from 'styled-icons/fa-solid';

// Estilos para construir la cabecera

const StyledHeader = styled.header`
  background: darkgray;
  display: flex;
  align-items: center;
  padding: 10px 20px;
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

// Componente para la cabecera de la aplicación;
// incluye un logo y un título

const Header = ({ appTitle }) => (
  <StyledHeader>
    <StyledLogo />
    <StyledH1>{appTitle}</StyledH1>
  </StyledHeader>
);

// PropTypes

Header.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

// Exports

export default Header;
