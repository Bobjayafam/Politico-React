import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import alertReducer from './alertReducer';
import loginReducer from './loginReducer';
import partiesReducer from './partiesReducer';

export default combineReducers({
  signup: signupReducer,
  alert: alertReducer,
  login: loginReducer,
  parties: partiesReducer
});
