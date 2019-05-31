import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types';
import { alertSuccess, alertError } from './alert';
import history from '../helpers/history';

export const signupStarted = user => {
  return { type: SIGNUP_STARTED, user };
};

export const signupSucceeded = user => {
  return { type: SIGNUP_SUCCESS, user };
};

export const signupFailed = error => {
  return { type: SIGNUP_FAILURE, error };
};

export const loginStarted = user => {
  return { type: LOGIN_STARTED, user };
};

export const loginSucceeded = user => {
  return { type: LOGIN_SUCCESS, user };
};

export const loginFailed = error => {
  return { type: LOGIN_FAILURE, error };
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const signup = user => dispatch => {
  dispatch(signupStarted(user));
  axios
    .post('https://politico-ja.herokuapp.com/api/v1/auth/signup', user)
    .then(res => {
      dispatch(signupSucceeded(res.data.data[0]));
      localStorage.setItem('user', JSON.stringify(res.data.data[0]));
      dispatch(alertSuccess('Registration Successful'));
      setTimeout(() => {
        history.push('/user-dashboard');
      }, 3000);
    })
    .catch(err => {
      dispatch(signupFailed(err.response.data.error));
      dispatch(alertError(err.response.data.error));
    });
};

export const login = user => dispatch => {
  dispatch(loginStarted(user));
  axios
    .post('https://politico-ja.herokuapp.com/api/v1/auth/login', user)
    .then(res => {
      dispatch(loginSucceeded(res.data.data[0]));
      localStorage.setItem('user', JSON.stringify(res.data.data[0]));
      dispatch(alertSuccess('Login Successful'));
      const decodedToken = jwtDecode(res.data.data[0].token);
      if (decodedToken.isAdmin) {
        setTimeout(() => {
          history.push('/admin-dashboard');
        }, 3000);
      } else {
        setTimeout(() => {
          history.push('/user-dashboard');
        }, 3000);
      }
    })
    .catch(err => {
      dispatch(loginFailed(err.response.data.error));
      dispatch(alertError('Email or password is incorrect'));
    });
};
