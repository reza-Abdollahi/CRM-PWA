/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line import/no-extraneous-dependencies
    middleware.push(require('redux-immutable-state-invariant')());

    const { createLogger } = require(`redux-logger`);
    const logger = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
    });
    middleware.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
