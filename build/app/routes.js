'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _MainLayout = require('./layouts/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _Search = require('./components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _DetailContainer = require('./containers/DetailContainer');

var _DetailContainer2 = _interopRequireDefault(_DetailContainer);

var _OverviewContainer = require('./containers/OverviewContainer');

var _OverviewContainer2 = _interopRequireDefault(_OverviewContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _MainLayout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, {
    component: function component() {
      return _react2.default.createElement(_Search2.default, {
        label: 'Enter a city or location.',
        containerClass: 'form__container--main',
        formBtnClass: 'btn btn-info form__searchBtn--main',
        formClass: 'formClass'
      });
    }
  }),
  _react2.default.createElement(_reactRouter.Route, { path: '/overview/:location', component: _OverviewContainer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/detail/:day/:dayOfWeek', component: _DetailContainer2.default })
);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/routes.js');
}();

;