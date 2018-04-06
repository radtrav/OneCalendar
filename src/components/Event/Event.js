import React from 'react';
import moment from 'moment';
import './Event.css';

const Event = ({ event, backgroundColor}) => {
  const { hour, minute, day, month, year, name,  } = event;
  const date = moment(`${year}-${month}-${day}`).format('D MMMM YYYY');
  return (
    <div
      className="event"
      style={{ backgroundColor }}
    >
      {`${date} ${hour}:${minute} - ${name}`}
      </div>
  );
};

export default Event;
