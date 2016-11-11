'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locationReducer;

var _apiHelpers = require('../utils/apiHelpers');

var defaultState = {
  locationName: '',
  formattedAddress: '',
  requestStatus: '',
  latitude: '',
  longitude: ''
};

function locationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'REQUEST_COORDINATES_PENDING':
      return Object.assign({}, state, {
        locationName: action.location,
        requestStatus: 'pending'
      });
    case 'REQUEST_COORDINATES_FULFILLED':
      return (0, _apiHelpers.createCoordinatesObj)(action.response);
    //    case 'REQUEST_COORDINATES_FAILED':
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

  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', 'src/app/reducers/locationReducer.js');

  __REACT_HOT_LOADER__.register(locationReducer, 'locationReducer', 'src/app/reducers/locationReducer.js');
}();

;