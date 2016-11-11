/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { Link } from 'react-router';
import * as actionCreators from '../actions/Actions';
import DayOverview from '../components/DayOverview';
import CurrentOverview from '../components/CurrentOverview';

class OverviewContainer extends Component {
  render() {
    const forecast = this.props.forecast;
    const location = this.props.location;

    return (
      <div className='container--overview'>
        <div className='display--location'>
          <h5>{location.formattedAddress}</h5>
        </div>
        <div className='container--currentOverview'>
          <CurrentOverview
            forecast={forecast.current}
          />
        </div>
        <div className='row container--weekOverview'>
          <div className='col-md-2 container--dayOverview'>
            <Link to={`/detail/${forecast.day1.objId}/${forecast.day1.dayOfWeek}`}>
              <div className='mask--dayOverview' />
            </Link>
            <DayOverview
              dayOfWeek={forecast.day1.dayOfWeek}
              high={forecast.day1.temperatureMax}
              icon={forecast.day1.iconSrc}
              iconAlt={forecast.day1.icon}
              low={forecast.day1.temperatureMin}
              summary={forecast.day1.summary}
            />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <Link to={`/detail/${forecast.day2.objId}/${forecast.day2.dayOfWeek}`}>
              <div className='mask--dayOverview' />
            </Link>
            <DayOverview
              dayOfWeek={forecast.day2.dayOfWeek}
              high={forecast.day2.temperatureMax}
              icon={forecast.day2.iconSrc}
              iconAlt={forecast.day2.icon}
              low={forecast.day2.temperatureMin}
              summary={forecast.day2.summary}
            />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <Link to={`/detail/${forecast.day3.objId}/${forecast.day3.dayOfWek}`}>
              <div className='mask--dayOverview' />
            </Link>
            <DayOverview
              dayOfWeek={forecast.day3.dayOfWeek}
              high={forecast.day3.temperatureMax}
              icon={forecast.day3.iconSrc}
              iconAlt={forecast.day3.icon}
              low={forecast.day3.temperatureMin}
              summary={forecast.day3.summary}
            />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <Link to={`/detail/${forecast.day4.objId}/${forecast.day4.dayOfWeek}`}>
              <div className='mask--dayOverview' />
            </Link>
            <DayOverview
              dayOfWeek={forecast.day4.dayOfWeek}
              high={forecast.day4.temperatureMax}
              icon={forecast.day4.iconSrc}
              iconAlt={forecast.day4.icon}
              low={forecast.day4.temperatureMin}
              summary={forecast.day4.summary}
            />
          </div>

          <div className='col-md-2 container--dayOverview'>
            <Link to={`/detail/${forecast.day5.objId}/${forecast.day5.dayOfWeek}`}>
              <div className='mask--dayOverview' />
            </Link>
            <DayOverview
              dayOfWeek={forecast.day5.dayOfWeek}
              high={forecast.day5.temperatureMax}
              icon={forecast.day5.iconSrc}
              iconAlt={forecast.day5.icon}
              low={forecast.day5.temperatureMin}
              summary={forecast.day5.summary}
            />
          </div>
        </div>
      </div>
    );
  }
}

OverviewContainer.propTypes = {
  location: PropTypes.object.isRequired,
  forecast: PropTypes.object.isRequired,
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
