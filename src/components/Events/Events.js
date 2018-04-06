import React from 'react';
import Event from '../Event/Event';
import './Events.css'

const Events = ({ events }) => (
  <div className="events-wrapper">
    {events.map((event, i) => (
      <Event
        backgroundColor={(i + 1) % 2 === 0 ? '#fbfafa' : '#ffffff'}
        event={event}
        key={`event-${i}`}
      />
    ))}
  </div>
);

export default Events;
