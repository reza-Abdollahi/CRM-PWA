import persistentState, * as fromState from '../helpers/persistentState';

const userSecretKey = persistentState.loadState(fromState.keys.USER_SECRET_KEY);
const userInitialState = userSecretKey ? { isLoggedIn: true } : {};

export default {
  user: userInitialState,
  activeAjaxCalls: 0,
  lines: {
    list: [],
    selectedId: null,
  }
};
