import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import NatsTimeBlocker from './NatsTimeBlocker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <NatsTimeBlocker />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
