import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from './LocationReducer';
import forecastReducer from './ForecastReducer';


const reducers = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  routing: routerReducer,
});

export { reducers as default };
