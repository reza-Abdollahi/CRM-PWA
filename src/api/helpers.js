import authApi from './authApi';
import * as persistentState from '../helpers/persistentState';

export function handleResponse(response) {
  return response.text()
    .then(text => {
      let data;
      try {
        data = text && JSON.parse(text);
      } catch (e) {
        if (response.ok) {
          return handelErrorResponse('InvalidJSON', response.status, undefined, text);
        }
      }

      if (!response.ok) {
        const errorMessage = (data && data.message) || response.statusText;
        const errorData = data || text;
        let errorType = "ApplicationError";
        if (response.status === 401) {
            authApi.logout();
            errorType = "UnAuthorized";
        }
        else if (response.status >= 500) {
          errorType = "ServerError";
        }
        return handelErrorResponse(errorType, response.status, errorMessage, errorData);
      }

      return data;
    });
}

const handelErrorResponse = (errorType, responseStatus, message, responseBody) => {
  return Promise.reject({
    type: errorType,
    status: responseStatus,
    message: message,
    body: responseBody,
  });
};


export function authHeader() {
    // return authorization header with jwt token
    const secretKey = persistentState.loadState(persistentState.keys.USER_SECRET_KEY);

    if (secretKey) {
        return { 'Authorization': 'Bearer ' + secretKey };
    } else {
        return {};
    }
}
