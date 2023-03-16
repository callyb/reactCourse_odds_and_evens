import React from 'react';
import { connect } from 'react-redux';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';
import Button from '@mui/material/Button';

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
    const recordLabel = isNewRecord ? 'NEW RECORD' : 'RECORD NUMBER OF GUESSES';

    const setToZero = () => {
        localStorage.removeItem(correctGuessesRecordKey)
        setVersion((x) => x + 1)
    }

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

            <h3 style={{
                color: 'red',
                fontFamily: 'Righteous'
            }}>{recordLabel}: {record}</h3>
            {correctGuesses === 0 &&
                <Button
                    variant='outlined'
                    color='error'
                    onClick={setToZero}
                    style={{
                        marginBottom: '5%'
                    }}>Reset Record to Zero</Button>}
            <span style={{
                color: 'blue',
            }}>
                <p>{remaining} cards remaining</p>
                <p>{correctGuesses} {guessText} correct </p>
            </span>
        </div>
    )
}

export default connect(
    ({
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ({ remaining, correctGuesses })
)(GameState);