import delay from './delay';
import {saveUserState, removeUserState} from '../helpers/persistentState';

class AuthApi {

  static login(username, password) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (username && password) {
          if (username === 'test' && password === '123') {
            saveUserState({username, Token:'test'});
            resolve({username});
          }else {
            reject(new Error('wrong credentials'));
          }
        }else {
          reject(new Error('both username and password are required'));
        }
      }, delay);
    });
  }

  static logout(){
    removeUserState();
  }

}

export default AuthApi;
