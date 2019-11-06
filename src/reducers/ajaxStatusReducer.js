import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(actionType) {
  return actionType.length > 8 && actionType.substring(actionType.length - 8) === "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.activeAjaxCalls, action) {
  if (action.type === types.AJAX_CALL_BEGIN) {
    return state + 1;
  }
  if (action.type === types.AJAX_CALL_ERROR
    || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
