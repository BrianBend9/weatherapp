import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from './locationReducer';
import forecastReducer from './forecastReducer';


const reducers = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  routing: routerReducer,
});

export default reducers;
