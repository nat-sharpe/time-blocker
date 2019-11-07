import { OPEN_MODAL, CLOSE_MODAL, SUBMIT_MEETING } from '../actions/actions';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedSlot: action.slot,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case SUBMIT_MEETING:
      return {
        ...state,
        meetings: action.meetings,
      };      
    default:
      return state;
  };
};

export default rootReducer;