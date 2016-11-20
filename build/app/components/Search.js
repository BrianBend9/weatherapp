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

var _Actions = require('../actions/Actions');

var actionCreators = _interopRequireWildcard(_Actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      location: ''
    };
    _this.handleChangeText = _this.handleChangeText.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'handleChangeText',
    value: function handleChangeText(event) {
      this.setState({
        location: event.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.routerActions.push('/overview/' + this.state.location);
      this.props.actionCreators.getLocationAndForecast(this.state.location);
      this.setState({
        location: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.containerClass },
        _react2.default.createElement(
          'h3',
          null,
          this.props.label
        ),
        _react2.default.createElement(
          'form',
          {
            className: this.props.formClass,
            onSubmit: this.handleSubmit,
            role: this.props.role
          },
          _react2.default.createElement('input', {
            className: 'form-control',
            name: 'location',
            onChange: this.handleChangeText,
            placeholder: 'Toronto, Canada',
            type: 'text',
            value: this.state.location
          }),
          _react2.default.createElement(
            'button',
            {
              className: this.props.formBtnClass,
              type: 'submit'
            },
            'Get Weather'
          )
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

Search.propTypes = {
  actionCreators: _react.PropTypes.object.isRequired, //eslint-disable-line
  containerClass: _react.PropTypes.string,
  formBtnClass: _react.PropTypes.string,
  formClass: _react.PropTypes.string,
  label: _react.PropTypes.string,
  role: _react.PropTypes.string,
  routerActions: _react.PropTypes.object.isRequired };

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)(actionCreators, dispatch),
    routerActions: (0, _redux.bindActionCreators)(_reactRouterRedux.routerActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Search);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Search, 'Search', 'src/app/components/Search.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/app/components/Search.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/app/components/Search.js');
}();

;