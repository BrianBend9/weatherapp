import React, { PropTypes } from 'react';

const Environmentals = props => (
  <div className={`display__environmentals--${props.cssClass}`}>
    <ul>
      <li>
        <p className={`display__envHeading--${props.cssClass}`}>wind speed</p>
        <p className={`display__envReading--${props.cssClass}`}>{props.windSpeed} km/h</p>
      </li>
      <li>
        <p className={`display__envHeading--${props.cssClass}`}>wind bearing</p>
        <p className={`display__envReading--${props.cssClass}`}>{props.windBearing}°</p>
      </li>
      <li>
        <p className={`display__envHeading--${props.cssClass}`}>cloud cover</p>
        <p className={`display__envReading--${props.cssClass}`}>{props.cloudCover} %</p>
      </li>
      <li>
        <p className={`display__envHeading--${props.cssClass}`}>pressure</p>
        <p className={`display__envReading--${props.cssClass}`}>{props.pressure}</p>
      </li>
      <li>
        <p className={`display__envHeading--${props.cssClass}`}>humidity</p>
        <p className={`display__envReading--${props.cssClass}`}>{props.humidity} %</p>
      </li>
      <li>
        <p className={`display__envHeading--${props.cssClass}`}>visibility</p>
        <p className={`display__envReading--${props.cssClass}`}>{props.visibility} km</p>
      </li>
    </ul>
  </div>
);

Environmentals.propTypes = {
  cloudCover: PropTypes.number,
  cssClass: PropTypes.string.isRequired,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  windBearing: PropTypes.number,
  windSpeed: PropTypes.number,
  visibility: PropTypes.number,
};

export default Environmentals;
