import React from 'react';
import Day from './Day';

const styles = {

};

const Week = ({week, addEvent}) => {
  return (
    <div style={{ display: 'flex'}} >
      {week.map((day, i) => {
        return <Day addEvent={addEvent} key={`day-${i}`} day={day}/>
      })}
    </div>);
};

export default Week;