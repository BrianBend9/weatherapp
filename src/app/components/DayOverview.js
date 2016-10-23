import React, { PropTypes } from 'react';

const DayOverview = () => (
  <div className='display--dayOverview'>
    <div className='forecastBrief--dayOverview'>
      <p className='display__dayOfWeek--dayOverview'>Tuesday</p>
      <p className='display__description--dayOverview'>This is a looooo ooo ooooo oong forecast description</p>
    </div>
    <div className='forecastImage--dayOverview'>
      Icon here.
    </div>
    <div className='forecastTemperature--dayOverview'>
      <div className='display__high--dayOverview'>
        <p className='temperatureHeading--dayOverview'>High</p>
        <p className='temperatureReading--dayOverview'>100°</p>
      </div>
      <div className='display__low--dayOverview'>
        <p className='temperatureHeading--dayOverview'>Low</p>
        <p className='temperatureReading--dayOverview'>9°</p>
      </div>
    </div>
  </div>
);

DayOverview.propTypes = {
  classNames: PropTypes.string.isRequired,
};


export default DayOverview;
