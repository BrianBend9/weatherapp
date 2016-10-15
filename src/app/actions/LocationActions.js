import axios from 'axios';

export function requestCoordinates(location) {
  return {
    type: 'REQUEST_COORDINATES_PENDING',
    requestStatus: 'pending',
    location,
  };
}

export function fulfilledCoodinates() {
  return {
    type: 'GET_COORDINATES_FULFILLED',
    requestStatus: 'fulfilled',
  };
}

export function rejectedCoodinates() {
  return {
    type: 'GET_COORDINATES_FAILED',
    requestStatus: 'failed',
  };
}

export function getCoordinates(location) {
  return (dispatch) => {
    dispatch(requestCoordinates(location));
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GEOCODER_API_KEY}`);
  };
}
