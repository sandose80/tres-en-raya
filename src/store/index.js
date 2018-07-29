import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  // activar extensión de Chrome para Redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export {
  resetGame, setTile, setCurrentPlayer, setGameOver,
} from './actions';

export default store;
