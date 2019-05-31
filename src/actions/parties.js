import axios from 'axios';
import { FETCH_PARTIES_STARTED, FETCH_PARTIES_SUCCESS, FETCH_PARTIES_FAILURE } from './types';
import authHeader from '../helpers/authHeader';

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
      console.log(res.data.data);
      dispatch(fetchPartiesSucceeded(res.data.data));
    })
    .catch(err => {
      console.log(err);
    });
};
