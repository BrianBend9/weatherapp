import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DayOverview from './DayOverview';

const Day = props => (
  <div className='col-md-2 container--dayOverview'>
    <Link to={`/detail/${props.objId}/${props.dayOfWeek}`}>
      <div className='mask--dayOverview' />
    </Link>
    <DayOverview
      dayOfWeek={props.dayOfWeek}
      high={props.high}
      icon={props.icon}
      iconAlt={props.iconAlt}
      low={props.low}
      summary={props.summary}
    />
  </div>
);

Day.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  low: PropTypes.number.isRequired,
  objId: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Day;
