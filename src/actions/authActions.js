import * as types from './actionTypes';
import authApi from '../api/authApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loginSuccess() { return { type: types.LOGIN_SUCCESS }; }
export function logout() {
  authApi.logout();
  return { type: types.LOGOUT };
}
export function getProfileSuccess(user) { return { type: types.USER_GET_PROFILE_SUCCESS, user }; }

export function login(username, password) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authApi.login(username, password)
      .then(user => dispatch(loginSuccess()))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

export function getProfileInfo() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authApi.getProfileInfo()
      .then(user => dispatch(getProfileSuccess(user)))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
