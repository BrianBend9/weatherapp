'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */

var MainLayout = function (_Component) {
  _inherits(MainLayout, _Component);

  function MainLayout() {
    _classCallCheck(this, MainLayout);

    return _possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).apply(this, arguments));
  }

  _createClass(MainLayout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'layout--main' },
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'layout__search--main' },
          this.props.children
        )
      );
    }
  }]);

  return MainLayout;
}(_react.Component);

var _default = MainLayout;
exports.default = _default;


MainLayout.propTypes = {
  children: _react.PropTypes.node.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainLayout, 'MainLayout', 'src/app/layouts/MainLayout.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/layouts/MainLayout.js');
}();

;