/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class DetailContainer extends Component {
  render() {
    const dayObj = this.props.params.day;
    const forecast = this.props.forecast;
    const location = this.props.location;

    return (
      <div className='container--detail'>
        <div className='display--location'>
          <h5>{location.formattedAddress}</h5>
        </div>

        <div className='display__fullDate--dayDetail'>
          <p>{moment(forecast[dayObj].fullDate).format('dddd, MMMM D YYYY')}</p>
        </div>

        <div className='display__description--dayDetail'>
          <p>{forecast[dayObj].summary}</p>
        </div>

        <div className='forecastTemperature--dayDetail'>
          <div className='display__low--dayDetail'>
            <p className='temperatureHeading--dayDetail'>Low</p>
            <p className='temperatureReading--dayDetail'>{forecast[dayObj].temperatureMin}°</p>
          </div>

          <div className='forecastImage--dayDetail'>
            <img src={forecast[dayObj].iconSrc} alt={forecast[dayObj].icon} />
          </div>

          <div className='display__high--dayDetail'>
            <p className='temperatureHeading--dayDetail'>High</p>
            <p className='temperatureReading--dayDetail'>{forecast[dayObj].temperatureMax}°</p>
          </div>
        </div>

        <div className='forecastEnvironmentals--dayDetail'>
          <ul>
            <li>
              <p className='display__envHeading--dayDetail'>wind speed</p>
              <p className='display__envReading--dayDetail'>{forecast[dayObj].windSpeed} km/h</p>
            </li>
            <li>
              <p className='display__envHeading--dayDetail'>wind bearing</p>
              <p className='display__envReading--dayDetail'>{forecast[dayObj].windBearing}°</p>
            </li>
            <li>
              <p className='display__envHeading--dayDetail'>cloud cover</p>
              <p className='display__envReading--dayDetail'>{forecast[dayObj].cloudCover} %</p>
            </li>
            <li>
              <p className='display__envHeading--dayDetail'>pressure</p>
              <p className='display__envReading--dayDetail'>{forecast[dayObj].pressure}</p>
            </li>
            <li>
              <p className='display__envHeading--dayDetail'>humidity</p>
              <p className='display__envReading--dayDetail'>{forecast[dayObj].humidity} %</p>
            </li>
            <li>
              <p className='display__envHeading--dayDetail'>visibility</p>
              <p className='display__envReading--dayDetail'>{forecast[dayObj].visibility} km</p>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
    forecast: state.forecast,
  };
}

export default connect(mapStateToProps)(DetailContainer);
