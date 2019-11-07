import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import data from './time-slots-data';

const initialState = {
  timeSlots: data.timeSlots,
  meetings: {},
  isModalOpen: false,
  selectedId: "",
}

export default createStore(
  rootReducer,
  initialState,
);