import React from 'react';
import './MonthHeader.css';

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', "Th",'Fr','Sa'];

const MonthHeader = () => (
  <div className="month-header-wrapper">
    {WEEK_DAYS.map(day => <div key={day} className="month-header"> {day} </div>)}
  </div>
);

export default MonthHeader;
