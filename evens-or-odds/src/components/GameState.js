import React from 'react';
import { connect } from 'react-redux';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from "react";

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if (correctGuesses > record) {
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);
        return { record: correctGuesses, isNewRecord: true };
    }

    return { record, isNewRecord: false };
}

const GameState = ({ correctGuesses, remaining }) => {
    const [, setVersion] = useState(0)
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
    const { record, isNewRecord } = checkRecord(correctGuesses);
    const recordLabel = isNewRecord ? 'New record' : 'Record';

    const setToZero = () => {
        localStorage.removeItem(correctGuessesRecordKey)
        setVersion((x) => x + 1)
    }

    console.log('IsNewRecord = ', isNewRecord);
    console.log('record = ', record);
    console.log('correctGuesses = ', correctGuesses);

    return (

        <div>
            <div
                style={{
                    paddingLeft: '40%'
                }}>
                {isNewRecord &&
                    <ConfettiExplosion
                        duration={5000}
                    />}
            </div>

            <h3>{recordLabel}: {record}</h3>
            <p>{remaining} cards remaining</p>
            <p>{correctGuesses} {guessText} correct </p>
            {correctGuesses === 0 && <button onClick={setToZero}>Reset Record to Zero</button>}
        </div>
    )
}

export default connect(
    ({
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ({ remaining, correctGuesses })
)(GameState);