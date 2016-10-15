import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const initialState = window.__INITIAL_STATE__ //eslint-disable-line
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');


ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default; //eslint-disable-line

    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>,
      rootElement
    );
  });
}
