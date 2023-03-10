import React from 'react';
import { connect } from 'react-redux';

const correctOddEvenRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctOddEvenRecordKey));

    if (correctGuesses > record) {
        localStorage.setItem(correctOddEvenRecordKey, correctGuesses);

        return { record: correctGuesses, isNewRecord: true };
    }

    return { record, isNewRecord: false };
}

const GameState = ({ correctGuesses, correctSuits, remaining }) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
    const suitText = correctSuits === 1 ? 'suit' : 'suits';

    const { record, isNewRecord } = checkRecord(correctGuesses);
    const recordLabel = isNewRecord ? '🎉 New record' : 'Record';

    return (
        <div>
            <h3>{recordLabel}: {record}</h3>
            <p>{remaining} cards remaining</p>
            <p>{correctGuesses} {guessText} correct </p>
            <p>{correctSuits} {suitText} correct</p>
        </div>
    )
}

export default connect(
    ({
        deck: { remaining },
        gameState: { correctGuesses, correctSuits }
    }) => ({ remaining, correctGuesses, correctSuits })
)(GameState);