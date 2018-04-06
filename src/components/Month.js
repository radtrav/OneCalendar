import React from 'react';
import moment from 'moment';
import EventList from './EventList';
import MonthHeader from './MonthHeader';
import Weeks from './Weeks';

const Month = ({ referenceDate, events }) => {
  const date = moment(referenceDate);
  return (
    <div>
      {date.format('YYYY MMM DD')}
      <div>{date._d.getMonth()}</div>
      <MonthHeader />
      <Weeks referenceDate={referenceDate} />
      <EventList events={events} />
    </div>
  );
};

export default Month;
