import React from 'react';
import moment from 'moment';
import Week from '../Week/Week';
import { chunk } from '../../helpers/utils';

const Weeks = ({ referenceDate }) => {
  const initDaysWithOffset = firstDay =>
    new Array(firstDay.weekday()).fill('');

  const chunkByWeek = days => chunk(days, 7);
  const getMonthStart = date => date.startOf('month');

  const date = moment(referenceDate);
  const start = getMonthStart(date);
  const days = initDaysWithOffset(start);
  let nextDay;

  for (let i = 0; i < start.daysInMonth(); i += 1) {
    nextDay = start.clone().add(i, 'day');
    days.push(moment(nextDay)._d.getDate());
  }

  const weeks = chunkByWeek(days);

  return weeks.map((week, i) => (
    <Week
      key={`week-${i}`}
      week={week}
      year={date.year()}
      month={date.month() + 1}
    />
  ));
};

export default Weeks;