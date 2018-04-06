import React from 'react';
import DayContainer from './DayContainer';

const styles = {};

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
