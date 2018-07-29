// src/layout/Contents.js

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';

// Contenedor genérico para escenas

const StyledBox = styled(Box)`
  flex: 1;
`;

// Componente para añadir contenido genérico

const Contents = ({ children }) => (
  <StyledBox px={0} py={4}>
    {children}
  </StyledBox>
);

// ProTypes

Contents.propTypes = {
  children: PropTypes.element.isRequired,
};

// Exports

export default Contents;
