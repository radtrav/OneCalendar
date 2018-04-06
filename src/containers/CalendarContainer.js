import React from 'react';
import Calendar from '../components/Calendar';
import { connect } from 'react-redux';
import { getEventsByMonth } from '../reducers/eventsReducer';
import { nextMonth, previousMonth } from '../actions/index';
import moment from 'moment';

const CalendarContainer = ({
  referenceDate,
  events,
  nextMonth,
  previousMonth,
}) => (
  <Calendar
    previousMonth={previousMonth}
    nextMonth={nextMonth}
    referenceDate={referenceDate}
    events={events}
  />
);

const mapStateToProps = ({ events, referenceDate }) => ({
  events: getEventsByMonth(events, moment(referenceDate).month()),
  referenceDate,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  previousMonth: () => dispatch(previousMonth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);