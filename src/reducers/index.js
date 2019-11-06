import { combineReducers } from 'redux';
import user from './AuthenticationReducer';
import activeAjaxCalls from './ajaxStatusReducer';
import lines from './lineReducer';

const rootReducer = combineReducers({
  user,
  activeAjaxCalls,
  lines,
});

export default rootReducer;
