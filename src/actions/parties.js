import axios from 'axios';
import {
  FETCH_PARTIES_STARTED,
  FETCH_PARTIES_SUCCESS,
  FETCH_PARTIES_FAILURE,
  ADD_PARTY_STARTED,
  ADD_PARTY_SUCCESS,
  ADD_PARTY_FAILURE
} from './types';
import authHeader from '../helpers/authHeader';
import { alertSuccess, alertError, clearAlert } from './alert';
import history from '../helpers/history';

export const fetchPartiesStarted = () => {
  return { type: FETCH_PARTIES_STARTED };
};

export const fetchPartiesSucceeded = parties => {
  return { type: FETCH_PARTIES_SUCCESS, parties };
};

export const fetchPartiesFailed = error => {
  return { type: FETCH_PARTIES_FAILURE, error };
};

export const fetchParties = () => dispatch => {
  dispatch(fetchPartiesStarted());
  axios({
    method: 'get',
    url: 'https://politico-ja.herokuapp.com/api/v1/parties',
    headers: authHeader()
  })
    .then(res => {
      dispatch(fetchPartiesSucceeded(res.data.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const addPartyStarted = party => {
  return { type: ADD_PARTY_STARTED, party };
};

export const addPartySucceeded = party => {
  return { type: ADD_PARTY_SUCCESS, party };
};

export const addPartyFailed = error => {
  return { type: ADD_PARTY_FAILURE, error };
};

export const addParty = party => dispatch => {
  dispatch(addPartyStarted(party));
  fetch('https://politico-ja.herokuapp.com/api/v1/parties', {
    mode: 'cors',
    method: 'POST',
    cache: 'no-cache',
    headers: {
      ...authHeader()
    },
    body: party
  })
    .then(res => res.json())
    .then(result => {
      if (result.status === 201) {
        dispatch(addPartySucceeded(result.data[0]));
        history.push('/admin-dashboard');
        dispatch(alertSuccess('Party was successfully created'));
        dispatch(fetchParties());
        setTimeout(() => {
          dispatch(clearAlert());
        }, 3000);
      } else {
        dispatch(addPartyFailed(result.error));
        history.push('/admin-dashboard');
        dispatch(fetchParties());
      }
    })
    .catch(err => {
      console.log(err);
    });
};
