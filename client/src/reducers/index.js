import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import emailListReducer from './email_list';
import usersReducer from './users';

const rootReducer = combineReducers({
  auth_state: authenticationReducer,
  email_list: emailListReducer,
  users: usersReducer
});

export default rootReducer;
