'use strict';

var _appRouting = require('./appRouting');

var _appRouting2 = _interopRequireDefault(_appRouting);

var _apiRouting = require('./apiRouting');

var _apiRouting2 = _interopRequireDefault(_apiRouting);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfigDev = require('../../webpack.config.dev.js');

var _webpackConfigDev2 = _interopRequireDefault(_webpackConfigDev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiler = (0, _webpack2.default)(_webpackConfigDev2.default);
var server = (0, _express2.default)();

server.use((0, _morgan2.default)(process.env.REQUEST_LOG_FORMAT || 'dev'));
server.use((0, _compression2.default)());

if (process.env.NODE_ENV !== 'production') {
  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: _webpackConfigDev2.default.output.publicPath,
    stats: {
      colors: true
    }
  }));
  server.use(require('webpack-hot-middleware')(compiler));
}

server.use(_express2.default.static('client'));

server.use('/api', _apiRouting2.default);

server.use('/', _appRouting2.default);

module.exports = server;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(compiler, 'compiler', 'src/server/server.js');

  __REACT_HOT_LOADER__.register(server, 'server', 'src/server/server.js');
}();

;