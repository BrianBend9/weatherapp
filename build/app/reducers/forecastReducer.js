'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forecastReducer;

var _apiHelpers = require('../utils/apiHelpers');

var defaultState = {
  requestStatus: '',
  current: '',
  day0: '',
  day1: '',
  day2: '',
  day3: '',
  day4: '',
  day5: '',
  day6: '',
  day7: ''
};

function forecastReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'REQUEST_FORECAST_PENDING':
      return Object.assign({}, state, {
        requestStatus: 'pending'
      });
    case 'REQUEST_FORECAST_FULFILLED':
      return (0, _apiHelpers.createForecastObj)(action.response);
    //    case 'REQUEST_FORECAST_FAILED':
    //      return
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', 'src/app/reducers/forecastReducer.js');

  __REACT_HOT_LOADER__.register(forecastReducer, 'forecastReducer', 'src/app/reducers/forecastReducer.js');
}();

;