import React from 'react';
import DayContainer from '../containers/DayContainer';

const MonthHeader = () => (
  <div style={{ display: 'flex' }}>
    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      <DayContainer key={`weekday-${i}`} day={day} />
    ))}
  </div>
);

export default MonthHeader;