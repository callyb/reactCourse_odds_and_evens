import React from 'react';
import { connect } from 'react-redux';
import { fetchDrawCard } from '../actions/deck';

const CardDisplay = ({ cards }) => {
    if (!cards[0]) return null;

    const { value, suit, image } = cards[0];
    return (
        <div>
            <h3>{value} of {suit}</h3>
            <img src={image} alt='image' />
        </div>
    )
}

export default connect(
    ({ deck: { cards } }) => ({ cards }))(CardDisplay);