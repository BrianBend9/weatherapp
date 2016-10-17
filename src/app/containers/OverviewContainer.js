/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import * as actionCreators from '../actions/LocationActions';

class OverviewContainer extends Component {
  render() {
    return (
      <div>
        Im the Overview Container Component
      </div>
    );
  }
}

OverviewContainer.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
  actionCreators: PropTypes.object.isRequired, //eslint-disable-line
};

function mapStateToProps(state) {
  return {
    location: state.location,
    forecast: state.forecast,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators(actionCreators, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
