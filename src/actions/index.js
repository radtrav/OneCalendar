import { NEXT_MONTH, PREVIOUS_MONTH, ADD_EVENT } from './actionTypes';

export const nextMonth = () => ({ type: NEXT_MONTH });

export const previousMonth = () => ({ type: PREVIOUS_MONTH });

export const addEvent = event => ({
  event,
  type: ADD_EVENT,
});
