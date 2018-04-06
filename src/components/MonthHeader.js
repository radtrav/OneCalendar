import React from 'react';
import Day from './Day';

const MonthHeader = () => (
  <div style={{ display: 'flex' }}>
    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      <Day key={`weekday-${i}`} day={day} />
    ))}
  </div>
);

export default MonthHeader;