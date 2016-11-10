/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';

const CurrentOverview = props => (
  <div className='display--currentOverview'>
    <div className='forecastBrief--currentOverview'>
      <h5 className='display__briefHeading--currentOverview'>Current Weather</h5>
      <p className='display__briefDescription--currentOverview'>{props.forecast.summary}</p>
    </div>

    <div className='display__tempAndIcon--currentOverview'>
      <div className='forecastImage--currentOverview'>
        <img src={props.forecast.iconSrc} alt='icon' />
      </div>

      <div className='forecastTemperature--currentOverview'>
        <div className='display__temperature--currentOverview'>
          <h2>{props.forecast.temperature}</h2><span>°C</span>
        </div>
        <p className='display__timezone--currentOverview'>{`Timezone: ${props.forecast.timezone}`}</p>
      </div>
    </div>

    <div className='display__environmentals--currentOverview'>
      <ul>
        <li>
          <p className='display__envHeading--currentOverview'>wind speed</p>
          <p className='display__envReading--currentOverview'>{props.forecast.windSpeed} km/h</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>wind bearing</p>
          <p className='display__envReading--currentOverview'>{props.forecast.windBearing}°</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>cloud cover</p>
          <p className='display__envReading--currentOverview'>{props.forecast.cloudCover} %</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>pressure</p>
          <p className='display__envReading--currentOverview'>{props.forecast.pressure}</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>humidity</p>
          <p className='display__envReading--currentOverview'>{props.forecast.humidity} %</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>visibility</p>
          <p className='display__envReading--currentOverview'>{props.forecast.visibility} km</p>
        </li>
      </ul>
    </div>
  </div>
);

CurrentOverview.propTypes = {

};

export default CurrentOverview;
