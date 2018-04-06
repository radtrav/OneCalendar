import React, { Component } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { getEventsByMonth } from '../reducers/eventsReducer';
import { extendMoment } from 'moment-range';
import { chunk } from '../helpers/utils';
import EventList from './EventList';
import MonthHeader from './MonthHeader';
import Week from './Week';
import { nextMonth, previousMonth } from '../actions/index';

const moment = extendMoment(Moment);

class Month extends Component {
  createWeekOffset = firstOfMonth => new Array(firstOfMonth.weekday()).fill('');
  getWeeksInMonth = daysInMonth => chunk(daysInMonth, 7);
  getFirstDayInMonth = date => date.startOf('month');

  renderWeeks = () => {
    const { month } = this.props;
    const firstOfMonth = this.getFirstDayInMonth(moment(month));
    const daysInMonth = this.createWeekOffset(firstOfMonth);

    for (let i = 0; i < firstOfMonth.daysInMonth(); i += 1) {
      daysInMonth.push(moment(firstOfMonth.clone().add(i, 'day'))._d.getDate());
    }

    return this.getWeeksInMonth(daysInMonth).map((week, i) => (
      <Week key={`week-${i}`} week={week} />
    ));
  };

  render() {
    const { month } = this.props;
    return (
      <div>
        {moment(month).format('YYYY MMM DD')}
        <button onClick={() => this.props.previousMonth()}>
          previous month
        </button>
        <button onClick={() => this.props.nextMonth()}>next month</button>
        <div>{moment(month)._d.getMonth()}</div>
        <MonthHeader />
        {this.renderWeeks()}
        <EventList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = ({ month, events, currentDate }) => {
  // console.log('month',moment(month).month());
  // console.log('getEventsByMonth(events, moment(month).month())',getEventsByMonth(events, moment(month).month()))

  return {
    month,
    events: getEventsByMonth(events, moment(month).month()),
    currentDate,
  };
};

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  previousMonth: () => dispatch(previousMonth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Month);
