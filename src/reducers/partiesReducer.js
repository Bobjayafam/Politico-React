import {
  FETCH_PARTIES_STARTED,
  FETCH_PARTIES_SUCCESS,
  FETCH_PARTIES_FAILURE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PARTIES_STARTED:
      return { gettingParties: true };
    case FETCH_PARTIES_SUCCESS:
      return { parties: action.parties };
    case FETCH_PARTIES_FAILURE:
      return {};
    default:
      return state;
  }
};
