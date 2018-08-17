import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import usersReducer from './users';

const rootReducer = combineReducers({
  auth_state: authenticationReducer,
  users: usersReducer
});

export default rootReducer;
