'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geocodeEndpoint = geocodeEndpoint;
exports.forecastEndpoint = forecastEndpoint;
exports.getCoordinatesPreload = getCoordinatesPreload;
exports.getForecastPreload = getForecastPreload;
exports.dayOfWeek = dayOfWeek;
exports.fullDate = fullDate;
exports.createCoordinatesObj = createCoordinatesObj;
exports.createForecastObj = createForecastObj;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment-timezone');

var _iconHelpers = require('./iconHelpers');

var _iconHelpers2 = _interopRequireDefault(_iconHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function geocodeEndpoint(location) {
  return 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + process.env.GEOCODER_API_KEY;
}

function forecastEndpoint(latitude, longitude) {
  return 'https://api.darksky.net/forecast/' + process.env.WEATHER_API_KEY + '/' + latitude + ',' + longitude + '?exclude=[minutely,hourly]&units=ca';
}

function getCoordinatesPreload(queryLoc) {
  return _axios2.default.get(geocodeEndpoint(queryLoc)).then(function (res) {
    return { location: createCoordinatesObj(res) };
  }); //eslint-disable-line
}

function getForecastPreload(latitude, longitude) {
  return _axios2.default.get(forecastEndpoint(latitude, longitude)).then(function (res) {
    return res.data;
  });
}

function dayOfWeek(unixTimestamp, timezone) {
  return _moment2.default.unix(unixTimestamp).tz(timezone).format('dddd');
}

function fullDate(unixTimestamp, timezone) {
  return _moment2.default.unix(unixTimestamp).tz(timezone).format('YYYY-MM-DD');
}

function createCoordinatesObj(apiObj) {
  var obj = Object.keys(apiObj.data).indexOf('0') !== -1 ? apiObj.data[0] : apiObj.data.results[0];
  return {
    formattedAddress: obj.formatted_address,
    requestStatus: 'fulfilled',
    latitude: obj.geometry.location.lat,
    longitude: obj.geometry.location.lng
  };
}

function createForecastObj(apiObj) {
  var newObj = { requestStatus: 'fulfilled' };
  var obj = apiObj.data.daily.data;
  var timezone = apiObj.data.timezone;

  newObj.current = apiObj.data.currently;
  newObj.current.cloudCover = Math.round(newObj.current.cloudCover * 100);
  newObj.current.fullDate = fullDate(apiObj.data.currently.time, timezone);
  newObj.current.humidity = Math.round(newObj.current.humidity * 100);
  newObj.current.iconSrc = (0, _iconHelpers2.default)(newObj.current.icon);
  newObj.current.timezone = timezone;

  for (var i = 0; i < obj.length; i++) {
    //eslint-disable-line
    obj[i].cloudCover = Math.round(obj[i].cloudCover * 100);
    obj[i].dayOfWeek = dayOfWeek(obj[i].time, timezone);
    obj[i].fullDate = fullDate(obj[i].time, timezone);
    obj[i].humidity = Math.round(obj[i].humidity * 100);
    obj[i].iconSrc = (0, _iconHelpers2.default)(obj[i].icon);
    obj[i].objId = 'day' + i;
    obj[i].timezone = timezone;
    newObj['day' + (0, _moment2.default)(obj[i].fullDate).diff((0, _moment2.default)(newObj.current.fullDate), 'days')] = obj[i]; //eslint-disable-line
  }

  return newObj;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(geocodeEndpoint, 'geocodeEndpoint', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(forecastEndpoint, 'forecastEndpoint', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(getCoordinatesPreload, 'getCoordinatesPreload', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(getForecastPreload, 'getForecastPreload', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(dayOfWeek, 'dayOfWeek', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(fullDate, 'fullDate', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(createCoordinatesObj, 'createCoordinatesObj', 'src/app/utils/apiHelpers.js');

  __REACT_HOT_LOADER__.register(createForecastObj, 'createForecastObj', 'src/app/utils/apiHelpers.js');
}();

;