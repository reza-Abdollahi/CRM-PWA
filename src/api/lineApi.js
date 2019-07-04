import {handleResponse, authHeader} from './helpers';

class lineApi {

  static getAllLines() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/api2/ActiveFile`, requestOptions).then(handleResponse);
  }

  static getLineDetails(lineId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/api2/ActiveFile/${lineId}`, requestOptions).then(handleResponse);
  }

}

export default lineApi;
