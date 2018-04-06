import React from 'react';
import Event from './Event';

const EventList = ({ events }) =>
  events.map((event, i) => <Event event={event} key={`event-${i}`} />);

export default EventList;
