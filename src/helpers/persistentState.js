export const keys = {
  USER_SECRET_KEY: "secretKey",
};

export function storageFactory(storage) {
  return {
    loadState: (key) => {
      try {
        const data = storage.getItem(key);
        if (data === undefined) {
          return undefined;
        }
        return JSON.parse(data);
      } catch (e) {
        return undefined;
      }
    },
    saveState: (key, data) => {
      try {
        const serializedData = JSON.stringify(data);
        storage.setItem(key, serializedData);
      } catch (e) {
        //  ignore
      }
    },
    removeState: (key) => {
      try {
        storage.removeItem(key);
      } catch (e) {
        //  ignore
      }
    },
  };
}

export default storageFactory(window.localStorage);
