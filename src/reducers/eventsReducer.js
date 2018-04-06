import { ADD_EVENT } from '../actions/actionTypes';


const DEFAULT_EVENTS = [
  { hour: 5, minute: 30, day: 2, month: 2, year: 2018, name: 'Learn Elixir' },
  { hour: 9, minute: 30, day: 5, month: 3, year: 2018, name: 'Eat Pie' },
  { hour: 6, minute: 30, day: 14, month: 4, year: 2018, name: 'Watch Die Hard' },
  { hour: 1, minute: 25, day: 1, month: 4, year: 2018, name: 'Fly a Kite' },
  { hour: 10, minute: 20, day: 15, month: 4, year: 2018, name: 'Prep for Lunch' },
  { hour: 10, minute: 30, day: 22, month: 5, year: 2018, name: 'Make Pasta' },
  { hour: 12, minute: 30, day: 22, month: 5, year: 2018, name: 'Walk Dog' },
];

export default function events(state = DEFAULT_EVENTS, action) {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
}

export const getEventsByMonth = (events, month) =>
  events.filter(event => event.month - 1 === month).sort((a, b) => a.day - b.day);
