import { OPEN_MODAL, CLOSE_MODAL, SUBMIT_MEETING, CANCEL_MEETING } from '../actions/actions';

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
        meetings: {
          ...state.meetings,
          [action.id]: action.meeting,
        },
        isModalOpen: false,
      };
    case CANCEL_MEETING:
      const newMeetings = {
        ...state.meetings,
      };
      delete newMeetings[action.id];
      return {
        ...state,
        meetings: newMeetings,
        isModalOpen: false,
      };
    default:
      return state;
  };
};

export default rootReducer;