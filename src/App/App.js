// src/App/App.js

import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

// Store y Provider para Redux
import { Provider as StoreProvider } from 'react-redux';
import store from '../store';

// Componentes de la platilla de la aplicación

import { Main, Header, Contents } from '../layout';

// Escenas de la aplicación

import { Game } from '../scenes';

// Estado inicial
// TODO: eliminar cuando se refactorice para Redux
import initialState from '../store/initialState';

// Algunas constantes
// TODO: sacarlas a un fichero de constantes
const APP_TITLE = 'Tres en Raya';

// Normalizar la presentación en distintos navegadores;
// elimina los márgenes hasta el borde de la ventana

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box }
  body { margin: 0 }
`;

// Componente principal (raíz) de la aplicación

// TODO: sacar toda la funcionalidad cuando se refactorice
// utilizando Redux; cada handler y elemento del estado
// será declarado/usado en los componentes que lo utilicen
class App extends Component {
  constructor() {
    super();
    this.state = initialState.game;
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // Método de utilidad para saber si ya se ha llenado
  // el tablero y, por tanto, ya no se puede seguir jugando;
  // habrá que llamar a getWinner() para determinar
  // quien ha sido el ganador o si ha habido empate;

  // TODO: Mover al componente Tile

  getVoidTilesCount(board) {
    const voidCount = board.reduce(
      (prev, curr) => prev + curr.reduce((acc, val) => acc + (val == null ? 1 : 0), 0),
      0,
    );
    return voidCount;
  }

  // Método de utilidad para determinar si ya hay un ganador;
  // se comprueban todas las combinaciones posibles por fuerza bruta;

  // TODO: refactorizar para dar soporte futuro a tableros n x n

  // TODO: Mover al componente Tile

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

  // Handler para cuando se hace click en una celda
  // del tablero;
  // se realizan varias cosas:
  // - comprueba si se puede seguir jugando
  // - impide que se pueda volver a jugar una celda
  //   que ya ha sido jugado por el otro jugador
  // - comprueba si ya ha habido un ganador
  // - actualiza el valor de una celda

  // TODO: este método hace demasiadas cosas e incumple
  // el principio SRP (Single Responsibility Principle);
  // refactorizar en varios métodos de utilidad más pequeños;

  // TODO: Mover al componente Tile

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

  // Handler para cuando se hace clic en el botón de
  // reiniciar el juego;

  // TODO: Mover al componente GameStatus

  handleReset() {
    this.setState({
      board: [[null, null, null], [null, null, null], [null, null, null]],
      player: 'X',
      isGameOver: false,
    });
  }

  // Renderizar el componente

  // TODO: una vez movidos los métodos e implementado Redux,
  // convertir este componente en un componente funcional

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

// Exports

export default App;
