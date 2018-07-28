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
  };
  render() {
    return (
      <Main>
        <Header appTitle={this.state.appTitle} />
        <Contents>
          <Game />
        </Contents>
      </Main>
    );
  }
}

export default App;
