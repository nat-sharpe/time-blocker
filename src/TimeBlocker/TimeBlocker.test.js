import React from 'react';
import ReactDOM from 'react-dom';
import TimeBlocker from './TimeBlocker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeBlocker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
