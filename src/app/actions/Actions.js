import axios from 'axios';

// Location 'Status' Actions

export function requestCoordinates(location) {
  return {
    type: 'REQUEST_COORDINATES_PENDING',
    requestStatus: 'pending',
    location,
  };
}

export function fulfilledCoordinates(response) {
  return {
    type: 'REQUEST_COORDINATES_FULFILLED',
    requestStatus: 'fulfilled',
    response,
  };
}

export function rejectedCoordinates(response) {
  return {
    type: 'REQUEST_COORDINATES_FAILED',
    requestStatus: 'failed',
    response,
  };
}

export function getLocation(location) {
  return (dispatch) => {
    dispatch(requestCoordinates(location));
    return axios.get(`https://simple-weather.herokuapp.com/api/geocode?location=${location}`)
      .then(
        response => dispatch(fulfilledCoordinates(response)),
        error => dispatch(rejectedCoordinates(error))
      );
  };
}

// Forecast 'Status' Actions

export function requestForecast() {
  return {
    type: 'REQUEST_FORECAST_PENDING',
    requestStatus: 'pending',
  };
}

export function fulfilledForecast(response) {
  return {
    type: 'REQUEST_FORECAST_FULFILLED',
    requestStatus: 'fulfilled',
    response,
  };
}

export function rejectedForecast(response) {
  return {
    type: 'REQUEST_FORECAST_FAILED',
    requestStatus: 'failed',
    response,
  };
}

export function getForecast(latitude, longitude) {
  return (dispatch) => {
    dispatch(requestForecast());
    return axios.get(`https://simple-weather.herokuapp.com/api/forecast?lat=${latitude}&lon=${longitude}`)
      .then(
        response => dispatch(fulfilledForecast(response)),
        error => dispatch(rejectedForecast(error))
      );
  };
}

// Coordinates & Forecast data retrieval action

export function getLocationAndForecast(location) {
  return (dispatch, getState) =>
    dispatch(getLocation(location))
      .then(() =>
        dispatch(getForecast(getState().location.latitude, getState().location.longitude))
      );
}
