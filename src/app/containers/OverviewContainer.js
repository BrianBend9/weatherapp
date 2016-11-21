/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import * as actionCreators from '../actions/Actions';
import Day from '../components/Day';
import CurrentOverview from '../components/CurrentOverview';

class OverviewContainer extends Component {
  render() {
    const forecast = this.props.forecast;
    const location = this.props.location;
    const arrWeek = createWeekForecastArray(forecast);

    function createWeekForecastArray(forecastObj) {
      const arr = [];
      for (let i = 1; i < 6; i++) {
        arr.push(forecastObj[`day${i}`]);
      }
      return arr;
    }

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

          {arrWeek.map((day, i) =>
            <Day
              dayOfWeek={forecast[`day${i + 1}`].dayOfWeek}
              high={forecast[`day${i + 1}`].temperatureMax}
              icon={forecast[`day${i + 1}`].iconSrc}
              iconAlt={forecast[`day${i + 1}`].icon}
              low={forecast[`day${i + 1}`].temperatureMin}
              objId={forecast[`day${i + 1}`].objId}
              summary={forecast[`day${i + 1}`].summary}
            />
          )}

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
