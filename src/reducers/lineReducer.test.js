import expect from 'expect';
import * as fromLineReducer from './lineReducer';
import * as authAuctions from '../actions/authActions';
import * as lineActions from '../actions/lineActions';

describe('lineReducer', () => {
  it('empty lines on logout', () => {
    const initialState = [{ id: 1 }];
    const logoutAction = authAuctions.logout();
    const newState = fromLineReducer.listReducer(initialState, logoutAction);

    expect(newState.length).toEqual(0);
  });

  it('add line details on successful fetch', () => {
    const initialState = [{ id: 1 }];
    const newLine = { id: 2 };
    const action = lineActions.getDetailsSuccess(newLine);
    const newState = fromLineReducer.listReducer(initialState, action);

    expect(newState.length).toEqual(2);
    expect(newState[1].id).toEqual(2);
  });
});
