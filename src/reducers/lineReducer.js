import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function listReducer(state = initialState.lines.list, action) {
  switch (action.type) {
    case types.LINES_GETALL_SUCCESS:
      return [...action.lines];
    case types.LINES_GET_DETAIL_SUCCESS:
      return [
        ...state.filter(l => l.id !== action.line.id),
        action.line
      ];
    case types.LOGOUT:
      return initialState.lines.list;
    default:
      return state;
  }
}

function selectedIdReducer(state = initialState.lines.selectedId, action) {
  switch (action.type) {
    case types.LINES_SELECT:
      return action.lineId;
    case types.LOGOUT:
      return initialState.lines.selectedId;
    default:
      return state;
  }
}

const linesReducer = combineReducers({
  list: listReducer,
  selectedId: selectedIdReducer,
});

export default linesReducer;

export const getSelectedLine = (state) => {
  const selectedLine = state.list.filter(l => l.id == state.selectedId);
  return selectedLine.length > 0 ? selectedLine[0] : null;
};
