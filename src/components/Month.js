import React, { Component } from 'react';
import Week from './Week';
import { extendMoment } from 'moment-range';
import Moment from 'moment';
const moment = extendMoment(Moment);

class Month extends Component {
  state = {
    date: moment(),
  };

  // a utility function to chunk an array
  chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }

    return chunked;
  };

  // returns an array of weeks in the month
  getWeeks = month => {
    const start = this.state.date
      .add(1, 'month')
      .startOf('month');

    // create an array of days offset so that the weekdays and the dates lign up
    const days = Array(start.weekday()).fill('');

    for (let i = 0; i < start.daysInMonth(); i += 1) {
      days.push(moment(start.clone().add(i, 'day'))._d.getDate());
    }
    console.log(['s', 'm', 't', 'w', 't', 'f', 's']);
    console.log(this.chunk(days, 7));

    return this.chunk(days, 7);
  };


  render() {
    return (
      <div>
        {[['S', 'M', 'T', 'W', 'T', 'F', 'S']].map((week, i) => <Week key={`week-${i}`} week={week}/>)}
        {this.getWeeks().map((week, i) => <Week key={`week-${i}`} week={week}/>)}
      </div>
    );
  }
}

export default Month;
