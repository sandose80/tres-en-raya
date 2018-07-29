// src/store/game/reducer.js

import initialState from './initialState';

import {
  GAME_RESET,
  GAME_SET_TILE,
  GAME_SET_CURRENT_PLAYER,
  GAME_SET_GAME_OVER,
} from './actions';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Reiniciar el juego
    case GAME_RESET:
      return { initialState };

    // Jugar una celda del tablero
    case GAME_SET_TILE: {
      const { row, column, value } = payload;
      const board = state.board.slice();
      board[row][column] = value;
      return { ...state, board };
    }

    // Asignar jugador al próximo turno
    case GAME_SET_CURRENT_PLAYER:
      return { ...state, player: payload.player };

    // Finalizar el juego
    case GAME_SET_GAME_OVER:
      return { ...state, isGameOver: true };

    // En cualquier otro caso, no hacemos nada...
    default:
      return state;
  }
};

// Exports

export default gameReducer;
