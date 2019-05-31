import { LOGIN_SUCCESS, LOGIN_STARTED, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
