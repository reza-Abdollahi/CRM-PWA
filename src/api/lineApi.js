import {handleResponse, authHeader} from './helpers';

class lineApi {

  static getAllLines() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/api2/ActiveFile`, requestOptions).then(handleResponse);
  }

}

export default lineApi;
