'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reactHotLoader = require('react-hot-loader');

var _Root = require('./containers/Root');

var _Root2 = _interopRequireDefault(_Root);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.__INITIAL_STATE__; //eslint-disable-line
var store = (0, _configureStore2.default)(initialState, _reactRouter.browserHistory);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
var rootElement = document.getElementById('root');

_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(_Root2.default, { store: store, history: history })
), rootElement);

if (module.hot) {
  module.hot.accept('./containers/Root', function () {
    var NextApp = require('./containers/Root').default; //eslint-disable-line

    _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextApp, { store: store, history: history })
    ), rootElement);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/app/client-entry.js');

  __REACT_HOT_LOADER__.register(store, 'store', 'src/app/client-entry.js');

  __REACT_HOT_LOADER__.register(history, 'history', 'src/app/client-entry.js');

  __REACT_HOT_LOADER__.register(rootElement, 'rootElement', 'src/app/client-entry.js');
}();

;