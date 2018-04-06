import React from 'react';
import Month from '../Month';
import MonthSwitcher from '../MonthSwitcher/MonthSwitcher';
import './Calendar.css';

const Calendar = ({ events, nextMonth, previousMonth, referenceDate }) => (
  <div className="calendar-wrapper">
    <MonthSwitcher
      referenceDate={referenceDate}
      previousMonth={previousMonth}
      nextMonth={nextMonth}
    />
    <Month referenceDate={referenceDate} events={events} />,
  </div>
);

export default Calendar;
