import delay from './delay';

class AuthApi {

  static login(username, password) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (username && password) {
          if (username === 'test' && password === '123') {
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

}

export default AuthApi;
