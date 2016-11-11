'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable prefer-template */

var weatherIcons = {
  'clear-day': 'sun',
  'clear-night': 'moon-stars',
  rain: 'cloud-rain',
  snow: 'cloud-snow',
  sleet: 'cloud-drizzle',
  wind: 'cloud-wind',
  fog: 'cloud-fog-2',
  cloudy: 'clouds',
  'partly-cloudy-day': 'clouds-sun',
  'partly-cloudy-night': 'clouds-moon',
  hail: 'cloud-hail',
  thunderstorm: 'cloud-rain-lightning',
  tornado: 'tornado'
};

function getIcon(weatherDescription) {
  var svgFileName = weatherIcons[weatherDescription];

  return require('../images/' + svgFileName + '.svg');
}

var _default = getIcon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(weatherIcons, 'weatherIcons', 'src/app/utils/iconHelpers.js');

  __REACT_HOT_LOADER__.register(getIcon, 'getIcon', 'src/app/utils/iconHelpers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/utils/iconHelpers.js');
}();

;