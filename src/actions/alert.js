import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './types';

export const alertSuccess = message => {
  return { type: ALERT_SUCCESS, message };
};

export const alertError = message => {
  return { type: ALERT_ERROR, message };
};

export const clearAlert = () => {
  return { type: ALERT_CLEAR };
};
