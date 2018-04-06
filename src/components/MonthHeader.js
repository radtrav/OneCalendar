import React from 'react';
import DayContainer from './DayContainer';

const MonthHeader = () => (
  <div style={{ display: 'flex' }}>
    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      <DayContainer key={`weekday-${i}`} day={day} />
    ))}
  </div>
);

export default MonthHeader;