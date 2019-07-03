import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(require('redux-immutable-state-invariant')());

    const { createLogger } = require(`redux-logger`);
    const logger = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error
    });
    middleware.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
