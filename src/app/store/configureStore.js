import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers/index';

const middleware = [];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middleware.push(logger);
}

export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
}
