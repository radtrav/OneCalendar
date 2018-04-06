import moment from 'moment';

export default function referenceDate(state = moment(), action) {
  switch (action.type) {
    case 'NEXT_MONTH':
      return moment(state).clone().add(1, 'month');
    case 'PREVIOUS_MONTH':
      return moment(state).subtract(1, 'month');
    default:
      return state;
  }
}
