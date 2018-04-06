import React from 'react';
import AddEventPanel from './AddEventPanel';

const styles = {
  width: 50,
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightgrey',
  cursor: 'pointer',
};

const Day = props => {
  const {
    day,
    year,
    month,
    selected,
    addingEvent,
    onClick,
    onMouseEnter,
    onMouseLeave,
    isCurrentDay,
  } = props;

  let backgroundColor;

  const showPanel = selected && addingEvent;

    if (selected && isCurrentDay) {
      backgroundColor = 'orange';
    } else if (isCurrentDay) {
      backgroundColor = 'purple';
    } else if (selected) {
      backgroundColor = 'aqua';
    } else {
      backgroundColor = 'lightgrey';
    }

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ ...styles , backgroundColor}}
    >
      {day}
      {showPanel && <AddEventPanel day={day} year={year} month={month} />}
    </div>
  );
};

export default Day;
