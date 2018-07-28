import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledColumn = styled.div`
  margin-left: 20px;
`;

const Column = ({ children }) => <StyledColumn>{children}</StyledColumn>;

Column.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Column;
