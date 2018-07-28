import react from 'react';
import PropTypes from 'prop-types';

const CurrentPlayer = ({ player }) => <p>Es el turno de: {player}</p>;

CurrentPlayer.propTypes = {
  player: PropTypes.string.isRequired,
};

export default CurrentPlayer;
