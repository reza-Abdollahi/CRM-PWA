import expect from 'expect';
import persistentState, * as fromState from './persistentState';

describe('persistent state', () => {
  it('save & load state', () => {
    const expected = "test-value";
    persistentState.saveState(fromState.keys.USER_SECRET_KEY, expected);
    const actual = persistentState.loadState(fromState.keys.USER_SECRET_KEY);
    expect(actual).toEqual(expected);
  });

  it('clear state', () => {
    const expected = "test-value";
    persistentState.saveState(fromState.keys.USER_SECRET_KEY, expected);
    persistentState.removeState(fromState.keys.USER_SECRET_KEY);
    const actual = persistentState.loadState(fromState.keys.USER_SECRET_KEY);
    expect(actual).toBeNull();
  });
});
