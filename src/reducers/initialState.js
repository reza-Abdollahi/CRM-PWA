import * as persistentState from '../helpers/persistentState';

const userSecretKey = persistentState.loadState(persistentState.keys.USER_SECRET_KEY);
const userInitialState = userSecretKey ? { isLoggedIn: true } : {};

export default {
  user: userInitialState,
  activeAjaxCalls: 0,
  lines: {
    list: [],
    selectedId: null,
  }
};
