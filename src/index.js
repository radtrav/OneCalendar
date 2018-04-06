import React from 'react';
import ReactDOM from 'react-dom';
import 'stylesheets/index.css';
import Calendar from 'components/Calendar';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from 'components/App';
import registerServiceWorker from 'helpers/registerServiceWorker';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Calendar />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
