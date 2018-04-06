import React from 'react';
import DayContainer from '../../containers/DayContainer';
import './Week.css';

const Week = ({ week, year, month }) => {
  return (
    <div className="week-wrapper">
      {week.map((day, i) => (
        <DayContainer key={`day-${i}`} day={day} year={year} month={month} />
      ))}
    </div>
  );
};

export default Week;
