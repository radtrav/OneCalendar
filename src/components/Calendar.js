import React,  { Component } from 'react';
import Month from './Month';
import moment from 'moment';

class Calendar extends Component {

  getMonthRange = () => {
    const focus = moment().startOf('month');
    const start = moment(moment().startOf('year'));
    const end = moment(moment().endOf('year'));
    const size = end.diff(start, 'month') + 1;

    const res = Array(size).fill(0).map((n, i) => focus.clone().add(n + i, 'months'));
    console.log('res', res);

    return '';
  };


  render() {
    return (
      <div>
        <Month />
      </div>
    )
  }
}

export default Calendar;