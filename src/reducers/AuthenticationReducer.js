import * as types from '../actions/actionTypes';
import initialState from  './initialState';

export default function AuthenticationReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}
