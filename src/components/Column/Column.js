// src/components/Column/Column.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilos del componente

const StyledColumn = styled.div`
  margin-left: 20px;
`;

// Componente genérico para mostrar contenido
// en forma de columna

const Column = ({ children }) => <StyledColumn>{children}</StyledColumn>;

// PropTypes

Column.propTypes = {
  children: PropTypes.element.isRequired,
};

// Exports

export default Column;
