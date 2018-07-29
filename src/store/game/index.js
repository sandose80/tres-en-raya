// src/store/game/index.js

// Estado inicial

export { default as gameInitialState } from './initialState';

// Reducer

export { default as gameReducer } from './reducer';

// Acciones

export {
  resetGame, setTile, setCurrentPlayer, setGameOver,
} from './actions';
