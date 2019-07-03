import {handleResponse, authHeader} from './helpers';
import * as persistentState from '../helpers/persistentState';

class AuthApi {

  static login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`/api2/authentication/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            persistentState.saveState(persistentState.keys.USER_SECRET_KEY, user.secretKey);
            return user;
        });
  }

  static getProfileInfo(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(`/api2/customer`, requestOptions).then(handleResponse);
  }

  static logout(){
    persistentState.removeState(persistentState.keys.USER_SECRET_KEY);
  }

}

export default AuthApi;
