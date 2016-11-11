'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _configureStore = require('../app/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = require('../app/routes');

var _routes2 = _interopRequireDefault(_routes);

var _apiHelpers = require('../app/utils/apiHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRouting = (0, _express2.default)();

appRouting.set('view engine', 'ejs');
appRouting.set('views', _path2.default.join(__dirname, '..', 'templates'));

appRouting.get('*', function (req, res, next) {

  var location = req.params[0].match(/[^/]*$/i)[0];
  var history = (0, _reactRouter.createMemoryHistory)(req.params.location);
  var store = (0, _configureStore2.default)();

  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, props) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      var css = process.env.NODE_ENV !== 'production' ? 'app.css' : 'app.min.css';
      var initialState = JSON.stringify(store.getState());

      var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.RouterContext, props)
      ));

      res.render('index', { content: content, initialState: initialState, css: css });
    } else {
      res.sendStatus(404);
    }
  });
});
var _default = appRouting;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appRouting, 'appRouting', 'src/server/appRouting.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/server/appRouting.js');
}();

;