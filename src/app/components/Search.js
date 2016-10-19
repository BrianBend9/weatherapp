/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import * as actionCreators from '../actions/LocationActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.routerActions.push(`/overview/${this.state.location}`);
    this.props.actionCreators.getForecast(this.state.location);
    this.setState({
      location: '',
    });
  }

  render() {
    return (
      <div className={this.props.containerClass}>
        <h3>{this.props.label}</h3>
        <form
          className={this.props.formClass}
          onSubmit={this.handleSubmit}
          role={this.props.role}
        >
          <input
            className='form-control'
            name='location'
            onChange={this.handleChangeText}
            placeholder='Toronto, Canada'
            type='text'
            value={this.state.location}
          />
          <button
            className={this.props.formBtnClass}
            type='submit'
          >
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  actionCreators: PropTypes.object.isRequired, //eslint-disable-line
  containerClass: PropTypes.string,
  formBtnClass: PropTypes.string,
  formClass: PropTypes.string,
  label: PropTypes.string,
  role: PropTypes.string,
  routerActions: PropTypes.object.isRequired, //eslint-disable-line
};

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators(actionCreators, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Search);
