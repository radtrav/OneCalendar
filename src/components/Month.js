import React, { Component } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { chunk } from '../helpers/utils';
import EventList from './EventList';
import MonthHeader from './MonthHeader';
import Week from './Week';
const moment = extendMoment(Moment);

const DEFAULT_EVENTS = [
  {name: 'Eat a burrito', time: '11-00', date: '1 February 2018' },
  {name: 'Learn React', time: '11-00', date: '1 February 2018' },
  {name: 'Eat a burrito', time: '11-00', date: '1 February 2018' },
];

class Month extends Component {
  state = {
    date: moment(),
    events: DEFAULT_EVENTS,
  };

  createWeekOffset = firstOfMonth => new Array(firstOfMonth.weekday()).fill('');
  getWeeksInMonth = daysInMonth => chunk(daysInMonth, 7);
  getFirstDayInMonth = date => date.add(1, 'month').startOf('month');
  addEvent = (event) => {
    console.log('args', arguments);
    console.log('event', event);
    console.log('state', this.state);
    const { events } = this.state;
    const newEvents = [...events, event];
    this.setState({ events: newEvents });
  };

  renderWeeks = month => {
    const { date } = this.state;
    const firstOfMonth = this.getFirstDayInMonth(date);
    const daysInMonth = this.createWeekOffset(firstOfMonth);

    for (let i = 0; i < firstOfMonth.daysInMonth(); i += 1) {
      daysInMonth.push(moment(firstOfMonth.clone().add(i, 'day'))._d.getDate());
    }

    return this.getWeeksInMonth(daysInMonth).map((week, i) => (
      <Week addEvent={this.addEvent} key={`week-${i}`} week={week} />
    ));
  };


  nextMonth = () =>
    this.setState({ date: this.state.date.clone().add(0, 'months') });

  previousMonth = () =>
    this.setState({ date: this.state.date.clone().subtract(1, 'months') });

  render() {
    const { date, events } = this.state;
    return (
      <div>
        {date.format('YYYY MMM DD')}
        <button onClick={this.previousMonth}> "previous" </button>
        <button onClick={this.nextMonth}> "next" </button>
        <div>{date._d.getMonth()}</div>
        <MonthHeader />
        {this.renderWeeks()}
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default Month;
