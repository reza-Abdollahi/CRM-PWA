import * as types from './actionTypes';
import authApi from '../api/mockAuthApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function success(user) { return { type: types.LOGIN_SUCCESS, user }; }
export function logout() {
  authApi.logout();
  return { type: types.LOGOUT };
}

export function login(username, password) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authApi.login(username, password)
      .then(user => dispatch(success(user)))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
