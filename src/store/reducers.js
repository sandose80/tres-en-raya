// src/store/reducers.js

import { combineReducers } from 'redux';
import { gameReducer } from './game';

export default combineReducers({ game: gameReducer });
