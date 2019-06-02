import {
  FETCH_PARTIES_STARTED,
  FETCH_PARTIES_SUCCESS,
  FETCH_PARTIES_FAILURE,
  ADD_PARTY_STARTED,
  ADD_PARTY_SUCCESS,
  ADD_PARTY_FAILURE
} from '../actions/types';

const initialPartiesState = {
  parties: [],
  addingParty: false,
  gettingParties: false,
  error: ''
};

export default (state = initialPartiesState, action) => {
  switch (action.type) {
    case FETCH_PARTIES_STARTED:
      return { ...state, gettingParties: true };
    case FETCH_PARTIES_SUCCESS:
      return { ...state, parties: action.parties };
    case FETCH_PARTIES_FAILURE:
      return { ...state, error: action.error };
    case ADD_PARTY_STARTED:
      return { ...state, addingParty: true };
    case ADD_PARTY_SUCCESS:
      return { ...state, parties: [...state.parties, action.party] };
    case ADD_PARTY_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
