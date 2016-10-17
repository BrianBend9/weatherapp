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
      return Object.assign({}, state, {
        requestStatus: 'fulfilled',
        current: action.response.data.currently,
        day0: action.response.data.daily.data[0],
        day1: action.response.data.daily.data[1],
        day2: action.response.data.daily.data[2],
        day3: action.response.data.daily.data[3],
        day4: action.response.data.daily.data[4],
        day5: action.response.data.daily.data[5],
        day6: action.response.data.daily.data[6],
        day7: action.response.data.daily.data[7],
      });
//    case 'REQUEST_FORECAST_FAILED':
//      return
    default:
      return state;
  }
}

