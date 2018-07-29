// src/layout/Main.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

// Estilos del componente

const StyledFlex = styled(Flex)``;

// Contenedor para el resto de componentes
// de la platilla de la aplicación;

const Main = ({ children }) => (
  <StyledFlex flexDirection="column">{children}</StyledFlex>
);

// PropTypes

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

// Exports

export default Main;
