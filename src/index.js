import React from 'react';
import ReactDOM from 'react-dom';
import 'stylesheets/index.css';
import CalendarContainer from 'containers/CalendarContainer';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from 'helpers/registerServiceWorker';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <CalendarContainer />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
