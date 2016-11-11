'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar() {
  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default navbar-fixed-top' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1' },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Toggle navigation'
          ),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' })
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/', className: 'navbar-brand' },
          'Weatherapp'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
        _react2.default.createElement(_Search2.default, { formClass: 'navbar-form navbar-right', formBtnClass: 'btn btn-info', containerClass: 'form__container--navbar', role: 'search' })
      )
    )
  );
};

var _default = Navbar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Navbar, 'Navbar', 'src/app/components/Navbar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/components/Navbar.js');
}();

;