import {handleResponse, authHeader} from './helpers';
import persistentState, * as fromState from '../helpers/persistentState';

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
            if (!user.secretKey)
              throw new Error("ورود ناموفق");
            persistentState.saveState(fromState.keys.USER_SECRET_KEY, user.secretKey);
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
    persistentState.removeState(fromState.keys.USER_SECRET_KEY);
  }

}

export default AuthApi;
