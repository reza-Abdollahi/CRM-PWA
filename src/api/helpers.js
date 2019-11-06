import persistentState, * as fromState from '../helpers/persistentState';

export function authHeader() {
  // return authorization header with jwt token
  const secretKey = persistentState.loadState(fromState.keys.USER_SECRET_KEY);

  if (secretKey) {
    return { Authorization: `Bearer ${secretKey}` };
  }
  return {};
}

export function clearUserState() {
  persistentState.removeState(fromState.keys.USER_SECRET_KEY);
}

// eslint-disable-next-line prefer-promise-reject-errors
const handelErrorResponse = (errorType, responseStatus, message, responseBody) => Promise.reject({
  type: errorType,
  status: responseStatus,
  message,
  body: responseBody,
});

export function handleResponse(response) {
  return response.text()
    .then((text) => {
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
          clearUserState();
          errorType = "UnAuthorized";
        } else if (response.status >= 500) {
          errorType = "ServerError";
        }
        return handelErrorResponse(errorType, response.status, errorMessage, errorData);
      }

      return data;
    });
}
