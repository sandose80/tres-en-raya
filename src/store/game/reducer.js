import initialState from './initialState';
import {
  GAME_RESET,
  GAME_SET_TILE,
  GAME_SET_CURRENT_PLAYER,
  GAME_SET_GAME_OVER,
} from './actions';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_RESET:
      return { initialState };

    case GAME_SET_TILE: {
      const { row, column, value } = payload;
      const board = state.board.slice();
      board[row][column] = value;
      return { ...state, board };
    }

    case GAME_SET_CURRENT_PLAYER:
      return { ...state, player: payload.player };

    case GAME_SET_GAME_OVER:
      return { ...state, isGameOver: true };

    default:
      return state;
  }
};

export default gameReducer;
