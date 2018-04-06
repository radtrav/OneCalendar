import { combineReducers } from 'redux';
import events from './eventsReducer';
import currentDate from './currentDateReducer';
import referenceDate from './referenceDateReducer';

const rootReducer = combineReducers({
  currentDate,
  events,
  referenceDate,
});

export default rootReducer;
