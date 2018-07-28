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

  handleClick(row, column) {
    const board = this.state.board.slice();
    const { player } = this.state;
    board[row][column] = player;
    this.setState({
      board,
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
