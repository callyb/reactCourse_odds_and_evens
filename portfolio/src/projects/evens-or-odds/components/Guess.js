import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';
import Button from '@mui/material/Button';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
    return (
        <div>
            <h3 style={{
                color: 'blue',
                fontFamily: 'Righteous'
            }}>Will it be even or odd?</h3>
            <div>
                <Button
                    onClick={setGuessEven}
                    style={guess === 'even' ? { border: '3px solid #43a047' } : null}
                    size="large"
                    variant="contained"
                >Even</Button>
                {' '}
                <Button
                    onClick={setGuessOdd}
                    style={guess === 'odd' ? { border: '3px solid #43a047' } : null}
                    size="large"
                    variant="contained"
                >Odd</Button>
            </div>
        </div>
    )
}

export default connect(
    ({ gameState: { guess } }) => ({ guess }),
    { setGuessEven, setGuessOdd }
)(Guess);