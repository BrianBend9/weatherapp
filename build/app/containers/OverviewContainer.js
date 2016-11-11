'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _Actions = require('../actions/Actions');

var actionCreators = _interopRequireWildcard(_Actions);

var _DayOverview = require('../components/DayOverview');

var _DayOverview2 = _interopRequireDefault(_DayOverview);

var _CurrentOverview = require('../components/CurrentOverview');

var _CurrentOverview2 = _interopRequireDefault(_CurrentOverview);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */

var OverviewContainer = function (_Component) {
  _inherits(OverviewContainer, _Component);

  function OverviewContainer() {
    _classCallCheck(this, OverviewContainer);

    return _possibleConstructorReturn(this, (OverviewContainer.__proto__ || Object.getPrototypeOf(OverviewContainer)).apply(this, arguments));
  }

  _createClass(OverviewContainer, [{
    key: 'render',
    value: function render() {
      var forecast = this.props.forecast;
      var location = this.props.location;

      return _react2.default.createElement(
        'div',
        { className: 'container--overview' },
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
          { className: 'container--currentOverview' },
          _react2.default.createElement(_CurrentOverview2.default, {
            forecast: forecast.current
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row container--weekOverview' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2 container--dayOverview' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/detail/' + forecast.day1.objId + '/' + forecast.day1.dayOfWeek },
              _react2.default.createElement('div', { className: 'mask--dayOverview' })
            ),
            _react2.default.createElement(_DayOverview2.default, {
              dayOfWeek: forecast.day1.dayOfWeek,
              high: forecast.day1.temperatureMax,
              icon: forecast.day1.iconSrc,
              iconAlt: forecast.day1.icon,
              low: forecast.day1.temperatureMin,
              summary: forecast.day1.summary
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2 container--dayOverview' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/detail/' + forecast.day2.objId + '/' + forecast.day2.dayOfWeek },
              _react2.default.createElement('div', { className: 'mask--dayOverview' })
            ),
            _react2.default.createElement(_DayOverview2.default, {
              dayOfWeek: forecast.day2.dayOfWeek,
              high: forecast.day2.temperatureMax,
              icon: forecast.day2.iconSrc,
              iconAlt: forecast.day2.icon,
              low: forecast.day2.temperatureMin,
              summary: forecast.day2.summary
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2 container--dayOverview' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/detail/' + forecast.day3.objId + '/' + forecast.day3.dayOfWek },
              _react2.default.createElement('div', { className: 'mask--dayOverview' })
            ),
            _react2.default.createElement(_DayOverview2.default, {
              dayOfWeek: forecast.day3.dayOfWeek,
              high: forecast.day3.temperatureMax,
              icon: forecast.day3.iconSrc,
              iconAlt: forecast.day3.icon,
              low: forecast.day3.temperatureMin,
              summary: forecast.day3.summary
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2 container--dayOverview' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/detail/' + forecast.day4.objId + '/' + forecast.day4.dayOfWeek },
              _react2.default.createElement('div', { className: 'mask--dayOverview' })
            ),
            _react2.default.createElement(_DayOverview2.default, {
              dayOfWeek: forecast.day4.dayOfWeek,
              high: forecast.day4.temperatureMax,
              icon: forecast.day4.iconSrc,
              iconAlt: forecast.day4.icon,
              low: forecast.day4.temperatureMin,
              summary: forecast.day4.summary
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2 container--dayOverview' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/detail/' + forecast.day5.objId + '/' + forecast.day5.dayOfWeek },
              _react2.default.createElement('div', { className: 'mask--dayOverview' })
            ),
            _react2.default.createElement(_DayOverview2.default, {
              dayOfWeek: forecast.day5.dayOfWeek,
              high: forecast.day5.temperatureMax,
              icon: forecast.day5.iconSrc,
              iconAlt: forecast.day5.icon,
              low: forecast.day5.temperatureMin,
              summary: forecast.day5.summary
            })
          )
        )
      );
    }
  }]);

  return OverviewContainer;
}(_react.Component);

OverviewContainer.propTypes = {
  location: _react.PropTypes.object.isRequired,
  forecast: _react.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    location: state.location,
    forecast: state.forecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)(actionCreators, dispatch),
    routerActions: (0, _redux.bindActionCreators)(_reactRouterRedux.routerActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OverviewContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OverviewContainer, 'OverviewContainer', 'src/app/containers/OverviewContainer.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/app/containers/OverviewContainer.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/app/containers/OverviewContainer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/containers/OverviewContainer.js');
}();

;