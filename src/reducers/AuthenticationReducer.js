import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function AuthenticationReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
      };
    case types.LOGOUT:
      return {};
    case types.USER_GET_PROFILE_SUCCESS:
      return {
        isLoggedIn: true,
        profile: { ...action.user },
      };
    default:
      return state;
  }
}
