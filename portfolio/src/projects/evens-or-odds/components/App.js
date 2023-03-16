import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import CardDisplay from './CardDisplay';
import Guess from './Guess';
import GameState from './GameState';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

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
      <Paper
        elevation={3}
        style={{ padding: '5%' }}
      >
        <div>
          <h1 style={{
            color: 'red',
            fontFamily: 'Rubik Marker Hatch'
          }}>♡ ♤ Guess the card! ♢ ♧</h1>
          {
            this.props.gameStarted ? (
              <div>
                <h3 style={{
                  color: 'blue',
                  fontFamily: 'Righteous'
                }}>The game is on!</h3>
                <GameState />
                <br />
                <Guess />
                {/* <br />
              <SuitsGuess /> */}
                <br />
                <DrawCard />
                <hr />
                <CardDisplay />
                <hr />
                <Button
                  onClick={this.props.cancelGame}
                  variant="contained"
                  color="error"
                >Cancel Game</Button>
              </div>
            ) : (
              <div>
                <h3 style={{
                  color: 'blue',
                  fontFamily: 'Righteous'
                }}>A new game awaits</h3>
                <br />
                <Button
                  onClick={this.startGame}
                  variant="contained"
                  color="error"
                >Start Game</Button>
                <hr />
                <Instructions />
              </div>
            )
          }
        </div>
      </Paper>
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
