import React from 'react';
import AddEventPanel from './AddEventPanel';

const Day = (props) => {
  const {
    day,
    year,
    month,
    selected,
    style,
    addingEvent,
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;
  const showPanel = selected && addingEvent;
  console.log('showPanel',showPanel);

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {day}
      {showPanel && <AddEventPanel day={day} year={year} month={month} />}
    </div>
  );
};

export default Day;
