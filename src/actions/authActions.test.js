import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from './authActions';
import * as types from './actionTypes';
import persistentState, * as fromState from '../helpers/persistentState';

describe('authentication actions', () => {
  it('login success', () => {
    const result = actions.loginSuccess();
    expect(result.type).toEqual(types.LOGIN_SUCCESS);
  });
  it('logout success', () => {
    const result = actions.logout();
    expect(result.type).toEqual(types.LOGOUT);
  });
  it('getProfile success', () => {
    const result = actions.getProfileSuccess();
    expect(result.type).toEqual(types.USER_GET_PROFILE_SUCCESS);
  });
});

describe('async actions', () => {
  afterEach(() => {
    persistentState.removeState(fromState.keys.USER_SECRET_KEY);
  });

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  it('login success - should create BEGIN_AJAX_CALL & LOGIN_SUCCESS', (done) => {
    const expected = [
      { type: types.AJAX_CALL_BEGIN },
      { type: types.LOGIN_SUCCESS },
    ];
    const store = mockStore({});
    store.dispatch(actions.login("test", "123")).then(() => {
      const [firstAction, secondAction] = store.getActions();
      expect(firstAction.type).toEqual(expected[0].type);
      expect(secondAction.type).toEqual(expected[1].type);
      done();
    });
  });

  it('login failure - should create BEGIN_AJAX_CALL & AJAX_CALL_ERROR', (done) => {
    const expected = [
      { type: types.AJAX_CALL_BEGIN },
      { type: types.AJAX_CALL_ERROR },
    ];
    const store = mockStore({});
    store.dispatch(actions.login("test", "---"))
      .catch((e) => { /* swallow */ })
      .then(() => {
        const [firstAction, secondAction] = store.getActions();
        expect(firstAction.type).toEqual(expected[0].type);
        expect(secondAction.type).toEqual(expected[1].type);
        done();
      });
  });
});
