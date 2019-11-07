import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actions';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedId: action.id,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  };
};

export default rootReducer;