/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Environmentals from '../components/Environmentals';

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

        <Environmentals
          cssClass='dayDetail'
          windSpeed={forecast[dayObj].windSpeed}
          windBearing={forecast[dayObj].windBearing}
          cloudCover={forecast[dayObj].cloudCover}
          pressure={forecast[dayObj].pressure}
          humidity={forecast[dayObj].humidity}
          visibility={forecast[dayObj].visibility}
        />

      </div>
    );
  }
}

DetailContainer.propTypes = {
  forecast: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  params: PropTypes.shape({
    day: PropTypes.string.isRequired,
  }),
};


function mapStateToProps(state) {
  return {
    location: state.location,
    forecast: state.forecast,
  };
}

export default connect(mapStateToProps)(DetailContainer);
