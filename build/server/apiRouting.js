'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _apiHelpers = require('../app/utils/apiHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRouting = new _express2.default.Router();
var jsonParser = _bodyParser2.default.json();

apiRouting.get('/geocode', jsonParser, function (req, res, next) {
  return _axios2.default.get((0, _apiHelpers.geocodeEndpoint)(req.query.location)).then(function (response) {
    return res.send(response.data.results);
  }).catch(function (error) {
    return res.send(error);
  });
});

apiRouting.get('/forecast', jsonParser, function (req, res, next) {
  return _axios2.default.get((0, _apiHelpers.forecastEndpoint)(req.query.lat, req.query.lon)).then(function (response) {
    return res.send(response.data);
  }).catch(function (error) {
    return res.send(error);
  });
});

var _default = apiRouting;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(apiRouting, 'apiRouting', 'src/server/apiRouting.js');

  __REACT_HOT_LOADER__.register(jsonParser, 'jsonParser', 'src/server/apiRouting.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/server/apiRouting.js');
}();

;