import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import lineApi from '../api/lineApi';

export function getAllLinesSuccess(lines) {
  return {type: types.LINES_GETALL_SUCCESS, lines};
}

export function selectLine(lineId) {
  return {type: types.LINES_SELECT, lineId};
}

export function getAllLines() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return lineApi.getAllLines()
      .then(lines => dispatch(getAllLinesSuccess(lines)))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
