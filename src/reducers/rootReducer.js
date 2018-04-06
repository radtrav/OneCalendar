import {combineReducers} from 'redux';
import events from './eventsReducer';
import month from './monthReducer';
import selectedDate from './selectedDateReducer';
import currentDate from './currentDateReducer';

const rootReducer = combineReducers({
  events,
  month,
  selectedDate,
  currentDate,
});

export default rootReducer;