import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';
import Button from '@mui/material/Button';

const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

  if (instructionsExpanded) {
    return (
      <div>
        <h3 style={{
          color: 'blue',
          fontFamily: 'Righteous'
        }}>Instructions</h3>
        <span style={{
          color: 'blue',
        }}>
          <p>Welcome to evens or odds. The game goes like this</p>
          <p>The deck is shuffled. Then choose. will the next card be even or odd?</p>
          <p>Make a choive on every draw, and see how many you get right!</p>
          <p>(Face cards don't count)</p>
        </span>
        <br />
        <Button variant="contained" onClick={collapseInstructions}>Show less</Button>
      </div>
    )
  }

  return (
    <div>
      <h3 style={{
        color: 'blue',
        fontFamily: 'Righteous'
      }}>Instructions</h3>
      <p style={{
        color: 'blue',
      }}>Welcome to evens or odds. The game goes like this...</p>
      <Button variant="contained" onClick={expandInstructions}>Read more</Button>
    </div>
  )
}

export default connect(
  state => ({ instructionsExpanded: state.settings.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
