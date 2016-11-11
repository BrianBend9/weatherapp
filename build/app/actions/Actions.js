'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestCoordinates = requestCoordinates;
exports.fulfilledCoordinates = fulfilledCoordinates;
exports.rejectedCoordinates = rejectedCoordinates;
exports.getLocation = getLocation;
exports.requestForecast = requestForecast;
exports.fulfilledForecast = fulfilledForecast;
exports.rejectedForecast = rejectedForecast;
exports.getForecast = getForecast;
exports.getLocationAndForecast = getLocationAndForecast;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Location 'Status' Actions

function requestCoordinates(location) {
  return {
    type: 'REQUEST_COORDINATES_PENDING',
    requestStatus: 'pending',
    location: location
  };
}

function fulfilledCoordinates(response) {
  return {
    type: 'REQUEST_COORDINATES_FULFILLED',
    requestStatus: 'fulfilled',
    response: response
  };
}

function rejectedCoordinates(response) {
  return {
    type: 'REQUEST_COORDINATES_FAILED',
    requestStatus: 'failed',
    response: response
  };
}

function getLocation(location) {
  return function (dispatch) {
    dispatch(requestCoordinates(location));
    return _axios2.default.get('https://simple-weatherapp.herokuapp.com/api/geocode?location=' + location).then(function (response) {
      return dispatch(fulfilledCoordinates(response));
    }, function (error) {
      return dispatch(rejectedCoordinates(error));
    });
  };
}

// Forecast 'Status' Actions

function requestForecast() {
  return {
    type: 'REQUEST_FORECAST_PENDING',
    requestStatus: 'pending'
  };
}

function fulfilledForecast(response) {
  return {
    type: 'REQUEST_FORECAST_FULFILLED',
    requestStatus: 'fulfilled',
    response: response
  };
}

function rejectedForecast(response) {
  return {
    type: 'REQUEST_FORECAST_FAILED',
    requestStatus: 'failed',
    response: response
  };
}

function getForecast(latitude, longitude) {
  return function (dispatch) {
    dispatch(requestForecast());
    return _axios2.default.get('https://simple-weatherapp.herokuapp.com/api/forecast?lat=' + latitude + '&lon=' + longitude).then(function (response) {
      return dispatch(fulfilledForecast(response));
    }, function (error) {
      return dispatch(rejectedForecast(error));
    });
  };
}

// Coordinates & Forecast data retrieval action

function getLocationAndForecast(location) {
  return function (dispatch, getState) {
    return dispatch(getLocation(location)).then(function () {
      return dispatch(getForecast(getState().location.latitude, getState().location.longitude));
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(requestCoordinates, 'requestCoordinates', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(fulfilledCoordinates, 'fulfilledCoordinates', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(rejectedCoordinates, 'rejectedCoordinates', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(getLocation, 'getLocation', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(requestForecast, 'requestForecast', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(fulfilledForecast, 'fulfilledForecast', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(rejectedForecast, 'rejectedForecast', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(getForecast, 'getForecast', 'src/app/actions/Actions.js');

  __REACT_HOT_LOADER__.register(getLocationAndForecast, 'getLocationAndForecast', 'src/app/actions/Actions.js');
}();

;