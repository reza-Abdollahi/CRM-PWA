import {loadUserState} from '../helpers/persistentState';

const user = loadUserState();
const userInitialState = user ? { isLoggedIn: true, profile: user } : {};

export default {
  user: userInitialState,
  activeAjaxCalls: 0,
  lines: {
    list: [],
    selectedId: null,
  }
};
