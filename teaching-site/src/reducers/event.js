import { 
    ERROR,
    FETCHING_EVENTS, 
    FETCHED_EVENTS, 
    CREATING_EVENT,
    CREATED_EVENT, 
    DELETING_EVENT,
    DELETED_EVENT,
    UPDATING_EVENT,
    UPDATED_EVENT
} from "../actions/types";

const INITIAL_STATE = {
    events: [],
    fetchingEvents: false,
    creatingEvent: false,
    deletingEvent: false,
    updatingEvent: false,
    errorMessage: "",
 
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_EVENTS:
        return { ...state, fetchingEvents: true };
    case FETCHED_EVENTS:
        return { ...state, events: action.payload, fetchingEvents: false };
    case CREATING_EVENT:
        return { ...state, creatingEvent: true };
    case CREATED_EVENT:
        return { ...state, events: [ ...state.events, action.payload ], creatingEvent: false };
    case DELETING_EVENT:
        return { ...state, deletingEvent: true };
    case DELETED_EVENT:
        return { ...state, events: state.events.filter(e => e._id !== action.payload._id) };
    case UPDATING_EVENT:
        return { ...state, updatingEvent: true };
    case UPDATED_EVENT:
        return { ...state, updatingEvent: false };
    case ERROR:
        return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
}