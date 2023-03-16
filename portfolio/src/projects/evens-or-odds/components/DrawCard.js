import React from 'react';
import { connect } from 'react-redux';
import { fetchDrawCard } from '../actions/deck';
import Button from '@mui/material/Button';

const DrawCard = ({ deck_id, fetchDrawCard }) => {

  return (
    <div>
      <Button
        onClick={fetchDrawCard(deck_id)}
        variant="outlined"
        size="large"
      >Draw the next card!</Button>
    </div>

  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
  }
}

export default connect(
  ({ deck: { deck_id } }) => ({ deck_id }),
  mapDispatchToProps
)(DrawCard);
