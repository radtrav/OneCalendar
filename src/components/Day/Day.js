import React from 'react';
import AddEventPanelContainer from '../../containers/AddEventPanelContainer';
import './Day.css';

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
    setAddingEventToFalse,
  } = props;

  let backgroundColor;

  const showPanel = selected && addingEvent;

  if (selected && isCurrentDay) {
    backgroundColor = 'orange';
  } else if (isCurrentDay) {
    backgroundColor = '#17bc9b';
  } else if (selected) {
    backgroundColor = '#e3e2e2';
  } else {
    backgroundColor = '#eeeeee';
  }

  return (
    <div
      className="day-wrapper"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor }}
    >
      <div className="day">{day}</div>
      <div>
        {showPanel && (
          <AddEventPanelContainer
            setAddingEventToFalse={setAddingEventToFalse}
            day={day}
            year={year}
            month={month}
          />
        )}
      </div>
    </div>
  );
};

export default Day;
