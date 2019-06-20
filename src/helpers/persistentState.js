export function loadUserState() {
  try {
    const userData = localStorage.getItem('user');
    if (userData === undefined) {
      return undefined;
    }
    return JSON.parse(userData);
  } catch (e) {
    return undefined;
  }
}

export function saveUserState(user) {
  try {
    const userData = JSON.stringify(user);
    localStorage.setItem('user', userData);
  } catch (e) {
    //  ignore
  }
}

export function removeUserState() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    //  ignore
  }
}

export function authHeader() {
    // return authorization header with jwt token
    const profile = loadUserState();
    const token = profile && profile.Token;

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}
