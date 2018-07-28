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

  handleClick(row, column) {
    const board = this.state.board.slice();
    const { player } = this.state;
    board[row][column] = player;
    const nextPlayer = player === 'X' ? 'O' : 'X';
    const voidCount = this.getVoidTilesCount(board);
    this.setState({
      board,
      player: nextPlayer,
      isGameOver: voidCount === 0,
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
