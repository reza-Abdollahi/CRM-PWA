import {combineReducers} from 'redux';
import user from './AuthenticationReducer';
import activeAjaxCalls from './ajaxStatusReducer';

const rootReducer = combineReducers({
  user,
  activeAjaxCalls
});

export default rootReducer;
