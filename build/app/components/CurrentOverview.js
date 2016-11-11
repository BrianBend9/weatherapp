'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentOverview = function CurrentOverview(props) {
  return _react2.default.createElement(
    'div',
    { className: 'display--currentOverview' },
    _react2.default.createElement(
      'div',
      { className: 'forecastBrief--currentOverview' },
      _react2.default.createElement(
        'h5',
        { className: 'display__briefHeading--currentOverview' },
        'Current Weather'
      ),
      _react2.default.createElement(
        'p',
        { className: 'display__briefDescription--currentOverview' },
        props.forecast.summary
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'display__tempAndIcon--currentOverview' },
      _react2.default.createElement(
        'div',
        { className: 'forecastImage--currentOverview' },
        _react2.default.createElement('img', { src: props.forecast.iconSrc, alt: props.forecast.icon })
      ),
      _react2.default.createElement(
        'div',
        { className: 'forecastTemperature--currentOverview' },
        _react2.default.createElement(
          'div',
          { className: 'display__temperature--currentOverview' },
          _react2.default.createElement(
            'h2',
            null,
            props.forecast.temperature
          ),
          _react2.default.createElement(
            'span',
            null,
            '\xB0C'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'display__timezone--currentOverview' },
          'Timezone: ' + props.forecast.timezone
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'display__environmentals--currentOverview' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'p',
            { className: 'display__envHeading--currentOverview' },
            'wind speed'
          ),
          _react2.default.createElement(
            'p',
            { className: 'display__envReading--currentOverview' },
            props.forecast.windSpeed,
            ' km/h'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'p',
            { className: 'display__envHeading--currentOverview' },
            'wind bearing'
          ),
          _react2.default.createElement(
            'p',
            { className: 'display__envReading--currentOverview' },
            props.forecast.windBearing,
            '\xB0'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'p',
            { className: 'display__envHeading--currentOverview' },
            'cloud cover'
          ),
          _react2.default.createElement(
            'p',
            { className: 'display__envReading--currentOverview' },
            props.forecast.cloudCover,
            ' %'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'p',
            { className: 'display__envHeading--currentOverview' },
            'pressure'
          ),
          _react2.default.createElement(
            'p',
            { className: 'display__envReading--currentOverview' },
            props.forecast.pressure
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'p',
            { className: 'display__envHeading--currentOverview' },
            'humidity'
          ),
          _react2.default.createElement(
            'p',
            { className: 'display__envReading--currentOverview' },
            props.forecast.humidity,
            ' %'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'p',
            { className: 'display__envHeading--currentOverview' },
            'visibility'
          ),
          _react2.default.createElement(
            'p',
            { className: 'display__envReading--currentOverview' },
            props.forecast.visibility,
            ' km'
          )
        )
      )
    )
  );
};

CurrentOverview.propTypes = {
  forecast: _react.PropTypes.object.isRequired
};

var _default = CurrentOverview;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CurrentOverview, 'CurrentOverview', 'src/app/components/CurrentOverview.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/components/CurrentOverview.js');
}();

;