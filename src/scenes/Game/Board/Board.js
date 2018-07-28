import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TileRow from './TileRow';

const Board = ({ rows }) => (
  <Fragment>{rows.map(values => <TileRow rowValues={values} />)}</Fragment>
);

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Board;
