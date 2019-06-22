import {handleResponse} from './helpers';
import {saveUserState, removeUserState} from '../helpers/persistentState';

class AuthApi {

  static login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            saveUserState(user);
            return user;
        });
  }

  static logout(){
    removeUserState();
  }

}

export default AuthApi;
