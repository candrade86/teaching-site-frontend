import { combineReducers } from 'redux';

import auth from './auth';
import event from './event';
import user from './user';

const rootReducer = combineReducers({
    auth,
    user,
    event
});

export default rootReducer;