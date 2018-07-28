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
  state = initialState;
  render() {
    return (
      <Main>
        <Header appTitle={APP_TITLE} />
        <Contents>
          <Game
            board={this.state.board}
            player={this.state.player}
            isGameOver={this.state.isGameOver}
          />
        </Contents>
      </Main>
    );
  }
}

export default App;
