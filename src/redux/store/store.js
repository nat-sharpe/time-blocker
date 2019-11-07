import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {};

export default createStore(
  rootReducer,
  initialState,
);