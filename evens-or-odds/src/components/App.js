import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import CardDisplay from './CardDisplay';
import Guess from './Guess';
import SuitsGuess from './SuitsGuess';
import GameState from './GameState';

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {
    console.log('this', this);
    console.log('this.state', this.state);

    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occurred.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }

    return (
      <div>
        <h2>♡ ♤ Guess the card! ♢ ♧</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <GameState />
              <br />
              <Guess />
              <br />
              <SuitsGuess />
              <br />
              <DrawCard />
              <hr />
              <CardDisplay />
              <hr />
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button onClick={this.startGame}>Start Game</button>
              <hr />
              <Instructions />
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);

  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   };
// }

// shorter way of writing the above function? (CHECK)
const componentConnector = connect(
  mapStateToProps,
  {
    startGame,
    cancelGame,
    fetchNewDeck
  }
);

export default componentConnector(App);
