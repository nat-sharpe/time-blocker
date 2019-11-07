import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import timeSlots from './time-slots-data';

const initialState = {
  timeSlots,
  appointments: [],
  modalOpen: false,
  selectedId: "",
}

export default createStore(
  rootReducer,
  initialState,
);