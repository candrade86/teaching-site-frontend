import { ERROR, FETCHING_USER, FETCHED_USER, UPDATING_USER, UPDATED_USER } from "../actions/types";

const INITIAL_STATE = {
  user: '',
  fetchingUser: '',
  updatingUser: false,
  errorMessage: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_USER:
        return { ...state, fetchingUser: true };
    case FETCHED_USER:
        return { ...state, user: action.payload, fetchingUser: false };
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