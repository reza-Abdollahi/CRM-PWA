import * as types from './actionTypes';
import authApi from '../api/mockAuthApi';

export function success(user) { return { type: types.LOGIN_SUCCESS, user }; }
export function logout() { return { type: types.LOGOUT }; }

export function login(username, password) {
  return dispatch => {
    return authApi.login(username, password)
      .then(user => dispatch(success(user)))
      .catch(error => {throw(error);});
  };
}
