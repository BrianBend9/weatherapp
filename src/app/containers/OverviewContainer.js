/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { Link } from 'react-router';
import * as actionCreators from '../actions/LocationActions';
import DayOverview from '../components/DayOverview';
import CurrentOverview from '../components/CurrentOverview';

class OverviewContainer extends Component {
  render() {
    return (
      <div className='container--overview'>
        <div className='display--location'>
          This is the name or location that was queried!
        </div>
        <div className='container--currentOverview'>
          <CurrentOverview />
        </div>
        <div className='row container--weekOverview'>
          <div className='col-md-2 container--dayOverview'>
            <Link to={'/detail/Monday'}>
              <div className='mask--dayOverview' />
            </Link>
            <DayOverview />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <DayOverview />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <DayOverview />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <DayOverview />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <DayOverview />
          </div>
        </div>
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
