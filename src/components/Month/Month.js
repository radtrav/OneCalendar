import React from 'react';
import MonthHeader from '../MonthHeader/MonthHeader';
import Weeks from '../Weeks/Weeks';
import './Month.css';

const Month = ({ referenceDate, events }) => {
  return (
    <div className="month-wrapper">
      <MonthHeader />
      <Weeks referenceDate={referenceDate} />
    </div>
  );
};

export default Month;
