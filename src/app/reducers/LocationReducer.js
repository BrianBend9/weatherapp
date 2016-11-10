import { createCoordinatesObj } from '../utils/apiHelpers';

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
      return createCoordinatesObj(action.response);
//    case 'REQUEST_COORDINATES_FAILED':
//      return
    default:
      return state;
  }
}
