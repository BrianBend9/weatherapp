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
      <div>
        <form
          className={this.props.className}
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
            className='btn btn-default'
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
  routerActions: PropTypes.object.isRequired, //eslint-disable-line
  actionCreators: PropTypes.object.isRequired, //eslint-disable-line
  className: PropTypes.string.isRequired,
  role: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators(actionCreators, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Search);
