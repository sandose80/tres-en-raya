import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'rebass';

const GameStatus = ({ isGameOver = false }) => (isGameOver ? (
  <Fragment>
    <Text>Juego terminado</Text>
    <Button my={3}>Reiniciar</Button>
  </Fragment>
) : (
  <Text>Jugando...</Text>
));

GameStatus.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
};

export default GameStatus;
