import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  flex: 1;
`;

const Contents = ({ children }) => (
  <StyledBox px={4} py={4}>
    {children}
  </StyledBox>
);

Contents.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Contents;
