'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DayOverview = function DayOverview(props) {
  return _react2.default.createElement(
    'div',
    { className: 'display--dayOverview' },
    _react2.default.createElement(
      'div',
      { className: 'forecastBrief--dayOverview' },
      _react2.default.createElement(
        'p',
        { className: 'display__dayOfWeek--dayOverview' },
        props.dayOfWeek
      ),
      _react2.default.createElement(
        'p',
        { className: 'display__description--dayOverview' },
        props.summary
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'forecastImage--dayOverview' },
      _react2.default.createElement('img', { src: props.icon, alt: props.iconAlt })
    ),
    _react2.default.createElement(
      'div',
      { className: 'forecastTemperature--dayOverview' },
      _react2.default.createElement(
        'div',
        { className: 'display__high--dayOverview' },
        _react2.default.createElement(
          'p',
          { className: 'temperatureHeading--dayOverview' },
          'High'
        ),
        _react2.default.createElement(
          'p',
          { className: 'temperatureReading--dayOverview' },
          props.high,
          '\xB0'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'display__low--dayOverview' },
        _react2.default.createElement(
          'p',
          { className: 'temperatureHeading--dayOverview' },
          'Low'
        ),
        _react2.default.createElement(
          'p',
          { className: 'temperatureReading--dayOverview' },
          props.low,
          '\xB0'
        )
      )
    )
  );
};

DayOverview.propTypes = {
  dayOfWeek: _react.PropTypes.string.isRequired,
  summary: _react.PropTypes.string.isRequired,
  icon: _react.PropTypes.string.isRequired,
  iconAlt: _react.PropTypes.string.isRequired,
  high: _react.PropTypes.number.isRequired,
  low: _react.PropTypes.number.isRequired
};

var _default = DayOverview;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DayOverview, 'DayOverview', 'src/app/components/DayOverview.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/components/DayOverview.js');
}();

;