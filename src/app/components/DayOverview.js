import React, { PropTypes } from 'react';

const DayOverview = props => (
  <div className='display--dayOverview'>
    <div className='forecastBrief--dayOverview'>
      <p className='display__dayOfWeek--dayOverview'>{props.dayOfWeek}</p>
      <p className='display__description--dayOverview'>{props.summary}</p>
    </div>
    <div className='forecastImage--dayOverview'>
      <img src={props.icon} alt={props.iconAlt} />
    </div>
    <div className='forecastTemperature--dayOverview'>
      <div className='display__high--dayOverview'>
        <p className='temperatureHeading--dayOverview'>High</p>
        <p className='temperatureReading--dayOverview'>{props.high}°</p>
      </div>
      <div className='display__low--dayOverview'>
        <p className='temperatureHeading--dayOverview'>Low</p>
        <p className='temperatureReading--dayOverview'>{props.low}°</p>
      </div>
    </div>
  </div>
);

DayOverview.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
};

export default DayOverview;
