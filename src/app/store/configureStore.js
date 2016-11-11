import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers/index';

export default function configureStore(initialState, history) {
  let middleware = [
    thunk,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middleware = [...middleware, logger];
  }

  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
}
