import React, { Component } from 'react';
import moment from 'moment';

const Event = (props) => {
  const { hour, minute, day, month, year, name } = props.event;
  const date = moment(`${year}-${month}-${day}  `).format('D MMMM YYYY');
  return <div>{`${date} ${hour}:${minute} - ${name}`}</div>;
};

export default Event;
