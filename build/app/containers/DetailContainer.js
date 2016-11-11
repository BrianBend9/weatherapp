'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */

var DetailContainer = function (_Component) {
  _inherits(DetailContainer, _Component);

  function DetailContainer() {
    _classCallCheck(this, DetailContainer);

    return _possibleConstructorReturn(this, (DetailContainer.__proto__ || Object.getPrototypeOf(DetailContainer)).apply(this, arguments));
  }

  _createClass(DetailContainer, [{
    key: 'render',
    value: function render() {
      var dayObj = this.props.params.day;
      var forecast = this.props.forecast;
      var location = this.props.location;

      return _react2.default.createElement(
        'div',
        { className: 'container--detail' },
        _react2.default.createElement(
          'div',
          { className: 'display--location' },
          _react2.default.createElement(
            'h5',
            null,
            location.formattedAddress
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'display__fullDate--dayDetail' },
          _react2.default.createElement(
            'p',
            null,
            (0, _moment2.default)(forecast[dayObj].fullDate).format('dddd, MMMM D YYYY')
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'display__description--dayDetail' },
          _react2.default.createElement(
            'p',
            null,
            forecast[dayObj].summary
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'forecastTemperature--dayDetail' },
          _react2.default.createElement(
            'div',
            { className: 'display__low--dayDetail' },
            _react2.default.createElement(
              'p',
              { className: 'temperatureHeading--dayDetail' },
              'Low'
            ),
            _react2.default.createElement(
              'p',
              { className: 'temperatureReading--dayDetail' },
              forecast[dayObj].temperatureMin,
              '\xB0'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'forecastImage--dayDetail' },
            _react2.default.createElement('img', { src: forecast[dayObj].iconSrc, alt: forecast[dayObj].icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'display__high--dayDetail' },
            _react2.default.createElement(
              'p',
              { className: 'temperatureHeading--dayDetail' },
              'High'
            ),
            _react2.default.createElement(
              'p',
              { className: 'temperatureReading--dayDetail' },
              forecast[dayObj].temperatureMax,
              '\xB0'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'forecastEnvironmentals--dayDetail' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'p',
                { className: 'display__envHeading--dayDetail' },
                'wind speed'
              ),
              _react2.default.createElement(
                'p',
                { className: 'display__envReading--dayDetail' },
                forecast[dayObj].windSpeed,
                ' km/h'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'p',
                { className: 'display__envHeading--dayDetail' },
                'wind bearing'
              ),
              _react2.default.createElement(
                'p',
                { className: 'display__envReading--dayDetail' },
                forecast[dayObj].windBearing,
                '\xB0'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'p',
                { className: 'display__envHeading--dayDetail' },
                'cloud cover'
              ),
              _react2.default.createElement(
                'p',
                { className: 'display__envReading--dayDetail' },
                forecast[dayObj].cloudCover,
                ' %'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'p',
                { className: 'display__envHeading--dayDetail' },
                'pressure'
              ),
              _react2.default.createElement(
                'p',
                { className: 'display__envReading--dayDetail' },
                forecast[dayObj].pressure
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'p',
                { className: 'display__envHeading--dayDetail' },
                'humidity'
              ),
              _react2.default.createElement(
                'p',
                { className: 'display__envReading--dayDetail' },
                forecast[dayObj].humidity,
                ' %'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'p',
                { className: 'display__envHeading--dayDetail' },
                'visibility'
              ),
              _react2.default.createElement(
                'p',
                { className: 'display__envReading--dayDetail' },
                forecast[dayObj].visibility,
                ' km'
              )
            )
          )
        )
      );
    }
  }]);

  return DetailContainer;
}(_react.Component);

DetailContainer.propTypes = {
  forecast: _react.PropTypes.object.isRequired,
  location: _react.PropTypes.string.isRequired,
  params: _react.PropTypes.shape({
    day: _react.PropTypes.string.isRequired
  })
};

function mapStateToProps(state) {
  return {
    location: state.location,
    forecast: state.forecast
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(DetailContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DetailContainer, 'DetailContainer', 'src/app/containers/DetailContainer.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/app/containers/DetailContainer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/containers/DetailContainer.js');
}();

;