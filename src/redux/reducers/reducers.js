import { OPEN_TIME_SLOT } from '../actions/actions';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case OPEN_TIME_SLOT:
      return {
        ...state,
        modalOpen: true,
        selectedId: action.id,
      };
    default:
      return state;
  };
};

export default rootReducer;