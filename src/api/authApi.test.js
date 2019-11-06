import expect from 'expect';
import authApi from './authApi';
import persistentState, * as fromState from '../helpers/persistentState';

describe('auth api', () => {
  afterEach(() => {
    persistentState.removeState(fromState.keys.USER_SECRET_KEY);
  });

  it('login success - set localstorge', (done) => {
    authApi.login("test", "123")
      .then((user) => {
        expect(persistentState.loadState(fromState.keys.USER_SECRET_KEY)).toEqual(user.secretKey);
        done();
      });
  });

  it('logout - clears localstorge', () => {
    persistentState.saveState(fromState.keys.USER_SECRET_KEY, "test-value");
    authApi.logout();
    expect(persistentState.loadState(fromState.keys.USER_SECRET_KEY)).toBeNull();
  });
});
