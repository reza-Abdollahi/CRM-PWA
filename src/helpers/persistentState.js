export const keys = {
  USER_SECRET_KEY: "secretKey",
};

export function loadState(key) {
  try {
    const data = localStorage.getItem(key);
    if (data === undefined) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
}

export function saveState(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (e) {
    //  ignore
  }
}

export function removeState(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    //  ignore
  }
}
