import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as authActions from '../actions/authActions';

describe("Store", () => {
  it("should handle successful login", () => {
    //  arrange
    const store = createStore(rootReducer, initialState);

    //  act
    const action = authActions.loginSuccess();
    store.dispatch(action);

    //  assert
    const actual = store.getState().user;
    const expected = { isLoggedIn: true };

    expect(actual).toEqual(expected);
  });
});
