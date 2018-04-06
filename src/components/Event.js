import React from 'react';

const Event = ({ event: { name, time, date } }) => <div>{`${name} ${time} ${date} `}</div>;

export default Event;
