import Immutable from 'immutable';

const defaultState = new Immutable.Map();

export default function forecastReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_FORECAST':
     return state.Map({b: 0});
    default:
      return state; 
  }
}
