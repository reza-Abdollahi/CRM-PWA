import {combineReducers} from 'redux';
import auth from './AuthenticationReducer';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
