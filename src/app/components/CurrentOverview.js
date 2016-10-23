import React from 'react';

const CurrentOverview = () => (
  <div className='display--currentOverview'>
    <div className='forecastBrief--currentOverview'>
      <p className='display__briefHeading--currentOverview'>Current Weather</p>
      <p className='display__briefDescription--currentOverview'>This is the description of current weather</p>
    </div>

    <div className='display__tempAndIcon--currentOverview'>
      <div className='forecastImage--currentOverview'>
        Icon here.
      </div>

      <div className='forecastTemperature--currentOverview'>
        100° <span>C</span>
      </div>
    </div>

    <div className='display__environmentals--currentOverview'>
      <ul>
        <li>
          <p className='display__envHeading--currentOverview'>wind speed</p>
          <p className='display__envReading--currentOverview'>200</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>wind direction</p>
          <p className='display__envReading--currentOverview'>290</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>cloudiness</p>
          <p className='display__envReading--currentOverview'>290</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>precipitation</p>
          <p className='display__envReading--currentOverview'>290</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>humidity</p>
          <p className='display__envReading--currentOverview'>290</p>
        </li>
        <li>
          <p className='display__envHeading--currentOverview'>dust</p>
          <p className='display__envReading--currentOverview'>290</p>
        </li>
      </ul>
    </div>
  </div>
);

CurrentOverview.propTypes = {

};

export default CurrentOverview;
