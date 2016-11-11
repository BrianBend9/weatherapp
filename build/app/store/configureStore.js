'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = require('react-router-redux');

var _index = require('../reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function configureStore(initialState, history) {
  var middleware = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

  if (process.env.NODE_ENV !== 'production') {
    var logger = (0, _reduxLogger2.default)();
    middleware = [].concat(_toConsumableArray(middleware), [logger]);
  }

  return (0, _redux.createStore)(_index2.default, initialState, _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware)));
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', 'src/app/store/configureStore.js');
}();

;