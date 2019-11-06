import * as types from "./actionTypes";

export function beginAjaxCall() {
  return { type: types.AJAX_CALL_BEGIN };
}

export function ajaxCallError(error) {
  return { type: types.AJAX_CALL_ERROR, error };
}
