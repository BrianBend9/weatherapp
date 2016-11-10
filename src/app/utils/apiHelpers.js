import axios from 'axios';
import moment from 'moment';
import 'moment-timezone';
import getIcon from './iconHelpers';

export function geocodeEndpoint(location) {
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GEOCODER_API_KEY}`;
}

export function forecastEndpoint(latitude, longitude) {
  return `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${latitude},${longitude}?exclude=[minutely,hourly]&units=ca`;
}

export function getCoordinatesPreload(queryLoc) {
  return axios.get(geocodeEndpoint(queryLoc))
    .then((res) => ({ location: createCoordinatesObj(res) })); //eslint-disable-line
}

export function getForecastPreload(latitude, longitude) {
  return axios.get(forecastEndpoint(latitude, longitude))
    .then(res => console.log(res.data));
}

export function dayOfWeek(unixTimestamp, timezone) {
  return moment.unix(unixTimestamp).tz(timezone).format('dddd');
}

export function fullDate(unixTimestamp, timezone) {
  return moment.unix(unixTimestamp).tz(timezone).format('YYYY-MM-DD');
}

export function createCoordinatesObj(apiObj) {
  const obj = (Object.keys(apiObj.data).indexOf('0') !== -1) ? apiObj.data[0] : apiObj.data.results[0];
  return {
    formattedAddress: obj.formatted_address,
    requestStatus: 'fulfilled',
    latitude: obj.geometry.location.lat,
    longitude: obj.geometry.location.lng,
  };
}

export function createForecastObj(apiObj) {
  const newObj = { requestStatus: 'fulfilled' };
  const obj = apiObj.data.daily.data;
  const timezone = apiObj.data.timezone;

  newObj.current = apiObj.data.currently;
  newObj.current.cloudCover = Math.round(newObj.current.cloudCover * 100);
  newObj.current.fullDate = fullDate(apiObj.data.currently.time, timezone);
  newObj.current.humidity = Math.round(newObj.current.humidity * 100);
  newObj.current.iconSrc = getIcon(newObj.current.icon);
  newObj.current.timezone = timezone;

  for (let i = 0; i < obj.length; i++) { //eslint-disable-line
    obj[i].cloudCover = Math.round(obj[i].cloudCover * 100);
    obj[i].fullDate = fullDate(obj[i].time, timezone);
    obj[i].humidity = Math.round(obj[i].humidity * 100);
    obj[i].iconSrc = getIcon(obj[i].icon);
    obj[i].objId = `day${i}`;
    obj[i].timezone = timezone;
    newObj[`day${moment(obj[i].fullDate).diff(moment(newObj.current.fullDate), 'days')}`] = obj[i]; //eslint-disable-line
  }

  return newObj;
}
