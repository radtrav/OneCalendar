import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { getEventsByMonth } from '../reducers/eventsReducer';
import { nextMonth, previousMonth } from '../actions/index';
import Month from './Month';
import moment from 'moment';

class Calendar extends Component {
  render() {
    const { referenceDate, events, nextMonth, previousMonth } = this.props;
    return (
      <div>
        <button onClick={previousMonth}>previous month</button>
        <button onClick={nextMonth}>next month</button>
        <Month referenceDate={referenceDate} events={events}  />
      </div>
    )
  }
}

const mapStateToProps = ({ events, referenceDate }) => ({
  events: getEventsByMonth(events, moment(referenceDate).month()),
  referenceDate,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  previousMonth: () => dispatch(previousMonth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);