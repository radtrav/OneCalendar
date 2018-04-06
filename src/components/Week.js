import React from 'react';
import DayContainer from '../containers/DayContainer';

const Week = ({ week, year, month }) => {
  return (
    <div style={{ display: 'flex' }}>
      {week.map((day, i) => {
        return (
          <DayContainer
            key={`day-${i}`}
            day={day}
            year={year}
            month={month}
          />
        );
      })}
    </div>
  );
};

export default Week;
