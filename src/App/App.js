import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { Main, Header, Contents } from '../layout';
import { Game } from '../scenes';
import initialState from '../store/initialState';

import store from '../store';

const APP_TITLE = 'Tres en Raya';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box }
  body { margin: 0 }
`;
class App extends Component {
  constructor() {
    super();
    this.state = initialState.game;
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  getVoidTilesCount(board) {
    const voidCount = board.reduce(
      (prev, curr) => prev + curr.reduce((acc, val) => acc + (val == null ? 1 : 0), 0),
      0,
    );
    return voidCount;
  }

  getWinner(board) {
    if (
      board[0][0]
      && board[0][0] === board[0][1]
      && board[0][0] === board[0][2]
    ) return board[0][0];
    if (
      board[0][0]
      && board[0][0] === board[1][0]
      && board[0][0] === board[2][0]
    ) return board[0][0];
    if (
      board[0][0]
      && board[0][0] === board[1][1]
      && board[0][0] === board[2][2]
    ) return board[0][0];
    if (
      board[2][2]
      && board[2][2] === board[2][1]
      && board[2][2] === board[2][0]
    ) return board[2][2];
    if (
      board[2][2]
      && board[2][2] === board[1][2]
      && board[2][2] === board[0][2]
    ) return board[2][2];
    if (
      board[0][2]
      && board[0][2] === board[1][1]
      && board[0][2] === board[2][0]
    ) return board[0][2];
    if (
      board[1][0]
      && board[1][0] === board[1][1]
      && board[1][0] === board[1][2]
    ) return board[1][0];
    if (
      board[0][1]
      && board[0][1] === board[1][1]
      && board[0][1] === board[2][1]
    ) return board[0][1];

    return null;
  }

  handleClick(row, column) {
    const newBoard = this.state.board.slice();
    const { player } = this.state;

    if (newBoard[row][column] != null) return;

    newBoard[row][column] = player;
    const voidCount = this.getVoidTilesCount(newBoard);
    const winner = this.getWinner(newBoard);

    let nextPlayer;
    if (winner == null) {
      if (voidCount === 0) {
        nextPlayer = '-';
      } else {
        nextPlayer = player === 'X' ? 'O' : 'X';
      }
    } else {
      nextPlayer = player;
    }

    this.setState({
      board: newBoard,
      player: nextPlayer,
      isGameOver: voidCount === 0 || winner != null,
    });
  }

  handleReset() {
    this.setState({
      board: [[null, null, null], [null, null, null], [null, null, null]],
      player: 'X',
      isGameOver: false,
    });
  }

  render() {
    const { board, player, isGameOver } = this.state;
    return (
      <StoreProvider store={store}>
        <Main>
          <Header appTitle={APP_TITLE} />
          <Contents>
            <Game
              board={board}
              player={player}
              isGameOver={isGameOver}
              clickHandler={this.handleClick}
              resetHandler={this.handleReset}
            />
          </Contents>
        </Main>
      </StoreProvider>
    );
  }
}

export default App;
