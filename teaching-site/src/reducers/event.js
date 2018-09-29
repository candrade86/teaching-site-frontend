import { ERROR, FETCHING_EVENTS, FETCHED_EVENTS } from "../actions/types";

const INITIAL_STATE = {
    events: [],
    fetchingEvents: false,
    errorMessage: "",
 
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_EVENTS:
        return { ...state, fetchingEvents: true };
    case FETCHED_EVENTS:
        return { ...state, events: [ ...state.events, action.payload ], fetchingEvents: false };
    case ERROR:
        return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
}