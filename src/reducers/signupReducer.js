import { SIGNUP_STARTED, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_STARTED:
      return { registering: true };
    case SIGNUP_SUCCESS:
      return { registering: false, user: action };
    case SIGNUP_FAILURE:
      return {};
    default:
      return state;
  }
};
