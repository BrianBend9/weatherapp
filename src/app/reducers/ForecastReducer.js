import { createForecastObj } from '../utils/apiHelpers';

const defaultState = {
  requestStatus: '',
  current: '',
  day0: '',
  day1: '',
  day2: '',
  day3: '',
  day4: '',
  day5: '',
  day6: '',
  day7: '',
};

export default function forecastReducer(state = defaultState, action) {
  switch (action.type) {
    case 'REQUEST_FORECAST_PENDING':
      return Object.assign({}, state, {
        requestStatus: 'pending',
      });
    case 'REQUEST_FORECAST_FULFILLED':
      return createForecastObj(action.response);
//    case 'REQUEST_FORECAST_FAILED':
//      return
    default:
      return state;
  }
}

