import { ADD_EVENT } from '../actions/actionTypes';


const DEFAULT_EVENTS = [
  { hour: 5, minute: 30, day: 2, month: 2, year: 2018, name: 'Learn Elixir' },
  { hour: 9, minute: 30, day: 5, month: 3, year: 2018, name: 'Eat Pie' },
  { hour: 6, minute: 30, day: 14, month: 4, year: 2018, name: 'Watch Die Hard' },
  { hour: 10, minute: 30, day: 22, month: 5, year: 2018, name: 'Make Pasta' },
];

export default function events(state = DEFAULT_EVENTS, action) {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.event];
      break;
    default:
      return state;
  }
}

// TODO sort by time and not just date
export const getEventsByMonth = (events, month) =>
  events.filter(event => event.month - 1 === month).sort((a, b) => a.day - b.day);
