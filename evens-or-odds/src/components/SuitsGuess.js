import React from 'react';
import { connect } from 'react-redux';
import { setGuessHearts, setGuessDiamonds, setGuessSpades, setGuessClubs } from '../actions/guess';

const SuitsGuess = ({ guessSuits, setGuessHearts, setGuessDiamonds, setGuessSpades, setGuessClubs }) => {
    return (
        <div>
            <h3>Will it be Hearts, Diamond, Spades or Clubs?</h3>
            <div>
                <button
                    onClick={setGuessHearts}
                    style={guessSuits === 'HEARTS' ? { border: '2px solid #6741d9' } : null}
                >Hearts</button>
                <button
                    onClick={setGuessDiamonds}
                    style={guessSuits === 'DIAMONDS' ? { border: '2px solid #6741d9' } : null}
                >Diamonds</button>
                <button
                    onClick={setGuessSpades}
                    style={guessSuits === 'SPADES' ? { border: '2px solid #6741d9' } : null}
                >Spades</button>
                <button
                    onClick={setGuessClubs}
                    style={guessSuits === 'CLUBS' ? { border: '2px solid #6741d9' } : null}
                >Clubs</button>
                <hr />

            </div>
        </div>
    )
}

export default connect(
    ({ gameState: { guessSuits } }) => ({ guessSuits }),
    { setGuessHearts, setGuessDiamonds, setGuessSpades, setGuessClubs }
)(SuitsGuess);
