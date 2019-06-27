import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lineReducer(state = initialState.lines, action) {
  switch (action.type) {
    case types.LINES_GETALL_SUCCESS:
      return [...action.lines];
    default:
      return state;
  }
}
