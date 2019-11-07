import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import timeSlots from './time-data';

const initialState = {
  timeSlots,
  appointments: [],
  modalOpen: false,
}

export default createStore(
  rootReducer,
  initialState,
);