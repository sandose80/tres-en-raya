import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { Main, Header, Contents } from '../layout';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box }
  body { margin: 0 }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Main>
          <Header appTitle="Tres en Raya" />
          <Contents>Contenido</Contents>
        </Main>
      </div>
    );
  }
}

export default App;
