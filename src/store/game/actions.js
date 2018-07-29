// src/store/game/actions.js

export const GAME_RESET = 'GAME/RESET';
export const GAME_SET_TILE = 'GAME/SET_TILE';
export const GAME_SET_CURRENT_PLAYER = 'GAME/SET_CURRENT_PLAYER';
export const GAME_SET_GAME_OVER = 'GAME/SET_GAME_OVER';

export const resetGame = payload => ({
  type: GAME_RESET,
  payload,
});

export const setTile = payload => ({
  type: GAME_SET_TILE,
  payload,
});

export const setCurrentPlayer = payload => ({
  type: GAME_SET_CURRENT_PLAYER,
  payload,
});

export const setGameOver = payload => ({
  type: GAME_SET_GAME_OVER,
  payload,
});
