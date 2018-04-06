import React from 'react';
import moment from 'moment';
import './MonthSwitcher.css';

const MonthSwitcher = ({referenceDate, previousMonth, nextMonth}) => {
  return (
    <div className="month-switcher-wrapper">
      <div className="month-switch" onClick={previousMonth}>{"<"}</div>
      <div className="title-wrapper">
        <div className="title"> {moment(referenceDate).format('MMMM')} </div>
        <div className="title"> {moment(referenceDate).format('YYYY')}</div>
      </div>
      <div className="month-switch" onClick={nextMonth}>{">"}</div>
    </div>
  );
};

export default MonthSwitcher;