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

// Coordinates & Forecast data retrieval action

export function getForecast(location) {
  return (dispatch, getState) => {
    dispatch(requestCoordinates(location));
    return axios.get(`/api/geocode?location=${location}`)
    .then(
      response => dispatch(fulfilledCoordinates(response)),
      error => dispatch(rejectedCoordinates(error)),
    )
    .then(
      () => dispatch(requestForecast()),
      axios.get(`/api/forecast?lat=${getState().location.latitude}&lon=${getState().location.longitude}`)
      .then(
        response => dispatch(fulfilledForecast(response)),
        error => dispatch(rejectedForecast(error)),
      )
    );
  };
}
