import Immutable from 'immutable';

const defaultState = new Immutable.Map();

export default function locationReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_LOC_COORDINATES':
      return state.Immutable.set({ a: 0 });
    default:
      return state;
  }
}
