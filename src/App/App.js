import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { Main, Header, Contents } from '../layout';
import { Game } from '../scenes';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box }
  body { margin: 0 }
`;

class App extends Component {
  state = {
    appTitle: 'Tres en Raya',
    board: [['X', null, 'X'], ['X', 'X', 'X'], ['X', 'X', 'X']],
  };
  render() {
    return (
      <Main>
        <Header appTitle={this.state.appTitle} />
        <Contents>
          <Game board={this.state.board} />
        </Contents>
      </Main>
    );
  }
}

export default App;
