import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(require('redux-immutable-state-invariant')());
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
