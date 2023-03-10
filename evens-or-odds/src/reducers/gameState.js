import { SET_GUESS, SET_GAME_STARTED, DECK_DRAW, SET_GUESS_SUITS } from '../actions/types';

const DEFAULT_GAME_STATE = { guess: '', guessSuits: '', correctGuesses: 0, correctSuits: 0 };

const EVENS = ['2', '4', '6', '8', '10'];
const ODDS = ['ACE', '3', '5', '7', '9'];

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch (action.type) {
        case SET_GUESS:
            return { ...state, guess: action.guess };
        case SET_GUESS_SUITS:
            return { ...state, guessSuits: action.guessSuits };
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;
        case DECK_DRAW.FETCH_SUCCESS:
            const { value } = action.cards[0];
            const { guess, correctGuesses } = state;
            const { guessSuits, correctSuits } = state;
            const suit = action.cards[0].suit;
            const evenMatch = EVENS.includes(value);
            const oddMatch = ODDS.includes(value);

            console.log('guess =', guess, 'guessSuits =', guessSuits, 'suit =', suit, 'oddmatch = ', oddMatch);
            const suitsResult = guessSuits.localeCompare(suit);
            if ((guessSuits.localeCompare(suit) === 0) && (guess === 'even' && evenMatch || guess === 'odd' && oddMatch)) {
                console.log('both returned: guessSuits:', guessSuits, 'suits:', suit, 'suitsResult =', suitsResult)
                return { ...state, correctGuesses: correctGuesses + 1, correctSuits: correctSuits + 1 };
            } else if ((guessSuits.localeCompare(suit) === 1 || -1) && (guess === 'even' && evenMatch || guess === 'odd' && oddMatch)) {
                console.log('odds/evens only returned: guessSuits:', guessSuits, 'suits: ', suit, 'suitsResult =', suitsResult)
                return { ...state, correctGuesses: correctGuesses + 1 };
            } else if ((guessSuits.localeCompare(suit) === 0) && (guess === 'even' &&
                evenMatch === false ||
                guess === 'odd' &&
                oddMatch === false)
            ) {

                console.log('only suits returned: guessSuits:', guessSuits, 'suits: ', suit, 'suitsResult =', suitsResult)
                return { ...state, correctSuits: correctSuits + 1 };
            } else if ((guessSuits.localeCompare(suit) === 1 || -1) && (guess === 'even' && evenMatch === false || guess === 'odd' && oddMatch === false)) {
                console.log('none returned: guessSuits:', guessSuits, 'suits: ', suit, 'suitsResult =', suitsResult);
                return {
                    state
                }
            }
            return state;
        default:
            return state;
    }
}

export default gameStateReducer;