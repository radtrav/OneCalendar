import moment from 'moment';

const DEFAULT_EVENTS = [
  { name: 'Eat a burrito', time: '11-00', date: '2018-01-06' },
  { name: 'Learn React', time: '11-00', date: '2018-02-06' },
  { name: 'Eat a burrito', time: '11-00', date: '2018-03-06' },
];

export default function events(state = DEFAULT_EVENTS, action) {
  switch (action.type) {
    case 'ADD_EVENT':
      console.log('event', action.event);
      return [...state, action.event];
      break;
    default:
      return state;
  }
}

export const getEventsByMonth = (events, month) => {
  return events.filter(event => {
    console.log('moment(event.date).month', moment(event.date).month());
    console.log('month + 1', month );
    return moment(event.date).month() === month ;
  });
};
