import { SET_GUESS } from './types';
import { SET_GUESS_SUITS } from './types';

export const setGuessEven = () => {
    return { type: SET_GUESS, guess: 'even' };
}

export const setGuessOdd = () => {
    return { type: SET_GUESS, guess: 'odd' };
}

export const setGuessHearts = () => {
    return { type: SET_GUESS_SUITS, guessSuits: 'HEARTS' }
}

export const setGuessDiamonds = () => {
    return { type: SET_GUESS_SUITS, guessSuits: 'DIAMONDS' }
}

export const setGuessSpades = () => {
    return { type: SET_GUESS_SUITS, guessSuits: 'SPADES' }
}

export const setGuessClubs = () => {
    return { type: SET_GUESS_SUITS, guessSuits: 'CLUBS' }
}