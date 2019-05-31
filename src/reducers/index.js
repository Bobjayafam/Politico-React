import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import alertReducer from './alertReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  signup: signupReducer,
  alert: alertReducer,
  login: loginReducer
});
