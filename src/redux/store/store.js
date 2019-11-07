import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import data from './time-slots-data';

const initialState = {
  timeSlots: data.timeSlots,
  meetings: {
    "10am": {
      name: "Nat Sharpe",
      phone: "(555) 715-7500",
      time: "10:00 a.m. - 11:00 a.m.",
    },
    "4pm": {
      name: "Tom Riddle",
      phone: "(555) 222-1011",
      time: "4:00 p.m. - 5:00 p.m.",
    }
  },
  isModalOpen: false,
  selectedId: "",
}

export default createStore(
  rootReducer,
  initialState,
);