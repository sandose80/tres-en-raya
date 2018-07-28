import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'rebass';

const GameStatus = ({ isGameOver = false, resetHandler }) => (isGameOver ? (
  <Fragment>
    <Text>Juego terminado</Text>
    <Button my={3} onClick={() => resetHandler()}>
        Reiniciar
    </Button>
  </Fragment>
) : (
  <Text>Jugando...</Text>
));

GameStatus.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  resetHandler: PropTypes.func.isRequired,
};

export default GameStatus;
