'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _locationReducer = require('./locationReducer');

var _locationReducer2 = _interopRequireDefault(_locationReducer);

var _forecastReducer = require('./forecastReducer');

var _forecastReducer2 = _interopRequireDefault(_forecastReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  location: _locationReducer2.default,
  forecast: _forecastReducer2.default,
  routing: _reactRouterRedux.routerReducer
});

var _default = reducers;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', 'src/app/reducers/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/reducers/index.js');
}();

;