import React, { PropTypes } from 'react';
import Environmentals from './Environmentals';

const CurrentOverview = ({ forecast }) => (
  <div className='display--currentOverview'>
    <div className='forecastBrief--currentOverview'>
      <h5 className='display__briefHeading--currentOverview'>Current Weather</h5>
      <p className='display__briefDescription--currentOverview'>{forecast.summary}</p>
    </div>

    <div className='display__tempAndIcon--currentOverview'>
      <div className='forecastImage--currentOverview'>
        <img src={forecast.iconSrc} alt={forecast.icon} />
      </div>

      <div className='forecastTemperature--currentOverview'>
        <div className='display__temperature--currentOverview'>
          <h2>{forecast.temperature}</h2><span>°C</span>
        </div>
        <p className='display__timezone--currentOverview'>{`Timezone: ${forecast.timezone}`}</p>
      </div>
    </div>

    <Environmentals
      cssClass='currentOverview'
      windSpeed={forecast.windSpeed}
      windBearing={forecast.windBearing}
      cloudCover={forecast.cloudCover}
      pressure={forecast.pressure}
      humidity={forecast.humidity}
      visibility={forecast.visibility}
    />
  </div>
);

CurrentOverview.propTypes = {
  forecast: PropTypes.string.isRequired,
};

export default CurrentOverview;
