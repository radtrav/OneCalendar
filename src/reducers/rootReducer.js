import {combineReducers} from 'redux';
import events from './eventsReducer';
import month from './monthReducer';
import selectedDate from './selectedDateReducer';
import currentDate from './currentDateReducer';
import referenceDate from './referenceDateReducer';

const rootReducer = combineReducers({
  events,
  month,
  selectedDate,
  currentDate,
  referenceDate,
});

export default rootReducer;