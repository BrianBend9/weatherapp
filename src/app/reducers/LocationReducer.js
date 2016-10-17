const defaultState = {
  locationName: '',
  formattedAddress: '',
  requestStatus: '',
  latitude: '',
  longitude: '',
};

export default function locationReducer(state = defaultState, action) {
  switch (action.type) {
    case 'REQUEST_COORDINATES_PENDING':
      return Object.assign({}, state, {
        locationName: action.location,
        requestStatus: 'pending',
      });
    case 'REQUEST_COORDINATES_FULFILLED':
      return Object.assign({}, state, {
        formattedAddress: action.response.data[0].formatted_address,
        requestStatus: 'fulfilled',
        latitude: action.response.data[0].geometry.location.lat,
        longitude: action.response.data[0].geometry.location.lng,
      });
//    case 'REQUEST_COORDINATES_FAILED':
//      return
    default:
      return state;
  }
}
