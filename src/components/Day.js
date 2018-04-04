import React from 'react';

const styles = {
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightgrey'
};

const Day = ({day}) => {
  return (
    <div style={styles}>
      {day}
  </div>);
};

export default Day;