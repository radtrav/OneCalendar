import moment from 'moment';

const DEFAULT_EVENTS = [
  { hour: 5, minute: 30, day: 2, month: 2, year: 2018, name: 'Learn Elixer' },
  { hour: 5, minute: 30, day: 2, month: 3, year: 2018, name: 'Learn Elixer' },
  { hour: 5, minute: 30, day: 2, month: 4, year: 2018, name: 'Learn Elixer' },
  { hour: 5, minute: 30, day: 2, month: 5, year: 2018, name: 'Learn Elixer' },
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

export const getEventsByMonth = (events, month) =>
  events.filter(event => event.month - 1 === month).sort((a, b) => a.day - b.day);
