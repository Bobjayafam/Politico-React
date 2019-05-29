import axios from 'axios';
import { GET_ERRORS, SIGNUP_STARTED, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import { alertSuccess, alertError } from './alert';

export const signupStarted = user => {
  return { type: SIGNUP_STARTED, user };
};

export const signupSucceeded = user => {
  return { type: SIGNUP_SUCCESS, user };
};

export const signupFailed = error => {
  return { type: SIGNUP_FAILURE, error };
};

export const signup = (user, history) => dispatch => {
  dispatch(signupStarted(user));
  axios
    .post('https://politico-ja.herokuapp.com/api/v1/auth/signup', user)
    .then(res => {
      dispatch(signupSucceeded(res.data.data));
      localStorage.setItem('user', JSON.stringify(res.data.data));
      dispatch(alertSuccess('Registration Successful'));
      setTimeout(() => {
        history.push('/dashboard');
      }, 3000);
    })
    .catch(err => {
      dispatch(signupFailed(err.response.data.error));
      dispatch(alertError(err.response.data.error));
    });
};

export const login = user => dispatch => {
  axios
    .post('https://politico-ja.herokuapp.com/api/v1/auth/login', user)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
