import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'rebass';
import CurrentPlayer from './CurrentPlayer';

const InfoBar = ({ currentPlayer, isGameOver = false }) => (
  <Fragment>
    <CurrentPlayer player={currentPlayer} />
    {isGameOver ? (
      <Fragment>
        <Text>Juego terminado</Text>
        <Button my={4}>Reiniciar</Button>
      </Fragment>
    ) : (
      <Text>Jugando...</Text>
    )}
  </Fragment>
);

InfoBar.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default InfoBar;
