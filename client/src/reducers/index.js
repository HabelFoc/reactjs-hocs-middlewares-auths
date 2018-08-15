import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import emailListReducer from './email_list';

const rootReducer = combineReducers({
  auth_state: authenticationReducer,
  email_list: emailListReducer
});

export default rootReducer;
