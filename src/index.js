import React from 'react';
import ReactDOM from 'react-dom';
import 'stylesheets/index.css';
import Calendar from 'components/Calendar';
import App from 'components/App';
import registerServiceWorker from 'helpers/registerServiceWorker';


ReactDOM.render(<Calendar />, document.getElementById('root'));
registerServiceWorker();
