import React from 'react';
import Month from './Month';

const Calendar = ({ events, nextMonth, previousMonth, referenceDate }) => (
  <div>
    <button onClick={previousMonth}>previous month</button>
    <button onClick={nextMonth}>next month</button>
    <Month referenceDate={referenceDate} events={events} />
  </div>
);

export default Calendar;
