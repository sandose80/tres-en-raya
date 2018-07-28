import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { Main, Header, Contents } from '../layout';
import { Game } from '../scenes';
import { initialState } from '../store';

const APP_TITLE = 'Tres en Raya';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box }
  body { margin: 0 }
`;
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  getVoidTilesCount(board) {
    const voidCount = board.reduce(
      (prev, curr) => prev + curr.reduce((acc, val) => acc + (val == null ? 1 : 0), 0),
      0,
    );
    return voidCount;
  }

  getWinner(board) {
    if (board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2]) return board[0][0];
    if (board[0][0] && board[0][0] === board[1][0] && board[0][0] === board[2][0]) return board[0][0];
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return board[0][0];
    if (board[2][2] && board[2][2] === board[2][1] && board[2][2] === board[2][0]) return board[2][2];
    if (board[2][2] && board[2][2] === board[1][2] && board[2][2] === board[0][2]) return board[2][2];
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) return board[0][2];
    if (board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2]) return board[1][0];
    if (board[0][1] && board[0][1] === board[1][1] && board[0][1] === board[2][1]) return board[0][1];

    return null;
  }

  handleClick(row, column) {
    const board = this.state.board.slice();
    const { player } = this.state;
    if (board[row][column] != null) return;
    board[row][column] = player;
    const voidCount = this.getVoidTilesCount(board);
    const winner = this.getWinner(board);
    let nextPlayer;
    if (winner == null) {
      nextPlayer = player === 'X' ? 'O' : 'X';
    } else {
      nextPlayer = player;
    }
    this.setState({
      board,
      player: nextPlayer,
      isGameOver: voidCount === 0 || winner != null,
    });
  }

  render() {
    const { board, player, isGameOver } = this.state;
    return (
      <Main>
        <Header appTitle={APP_TITLE} />
        <Contents>
          <Game
            board={board}
            player={player}
            isGameOver={isGameOver}
            clickHandler={this.handleClick}
          />
        </Contents>
      </Main>
    );
  }
}

export default App;
