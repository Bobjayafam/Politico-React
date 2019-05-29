import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  signup: signupReducer,
  alert: alertReducer
});
