import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

const StyledFlex = styled(Flex)``;

const Main = ({ children }) => <StyledFlex flexDirection="column">{children}</StyledFlex>;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
