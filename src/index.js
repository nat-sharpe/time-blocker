import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './redux/store/store';
import NatsTimeBlocker from './NatsTimeBlocker';

ReactDOM.render(
  <Provider store={store}>
    <NatsTimeBlocker />
  </Provider>, 
  document.getElementById('root')
);