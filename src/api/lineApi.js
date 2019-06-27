import {handleResponse} from './helpers';
import {authHeader} from '../helpers/persistentState';

class lineApi {

  static getAllLines() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/lines`, requestOptions).then(handleResponse);
  }

}

export default lineApi;
