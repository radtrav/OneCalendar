import React from 'react';
import Day from './Day';

const styles = {};

const Week = ({ week, year, month }) => {
  return (
    <div style={{ display: 'flex' }}>
      {week.map((day, i) => {
        return (
          <Day
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
