import moment from 'moment';
import { NEXT_MONTH, PREVIOUS_MONTH } from '../actions/actionTypes';

export default function referenceDate(state = moment(), action) {
  switch (action.type) {
    case NEXT_MONTH:
      return moment(state).clone().add(1, 'month');
    case PREVIOUS_MONTH:
      return moment(state).clone().subtract(1, 'month');
    default:
      return state;
  }
}
