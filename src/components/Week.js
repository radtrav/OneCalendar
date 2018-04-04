import React from 'react';
import Day from './Day';

const styles = {

};

const Week = ({week}) => {
  return (
    <div style={{ display: 'flex'}} >
      {week.map((day, i) => {
        return <Day key={`day-${i}`} day={day}/>
      })}
    </div>);
};

export default Week;