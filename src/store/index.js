// src/store/index.js

import { createStore } from 'redux';
import rootReducer from './reducers';

// Creamos el store

const store = createStore(
  rootReducer,
  // activar extensión de Chrome para Redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Exports

export {
  resetGame, setTile, setCurrentPlayer, setGameOver,
} from './actions';

export default store;
