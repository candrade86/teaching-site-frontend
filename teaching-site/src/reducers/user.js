import { ERROR, UPDATING_USER, UPDATED_USER } from "../actions/types";

const INITIAL_STATE = {
  user: '',
  updatingUser: false,
  errorMessage: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATING_USER:
        return { ...state, updatingUser: true };
    case UPDATED_USER:
        return { ...state, user: action.payload, updatingUser: false };
    case ERROR:
        return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
}