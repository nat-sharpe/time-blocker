import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './redux/store/store';
import TimeBlocker from './TimeBlocker/TimeBlocker';

ReactDOM.render(
  <Provider store={store}>
    <TimeBlocker />
  </Provider>, 
  document.getElementById('root')
);