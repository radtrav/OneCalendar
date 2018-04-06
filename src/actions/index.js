import { NEXT_MONTH, PREVIOUS_MONTH, ADD_EVENT } from './actionTypes';

export const nextMonth = () => {
  return {
    type: NEXT_MONTH,
  };
};

export const previousMonth = () => {
  return {
    type: PREVIOUS_MONTH,
  };
};

export const addEvent = event => {
  return {
    event,
    type: ADD_EVENT,
  };
};
