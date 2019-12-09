import { combineReducers } from 'redux';
import cityWeatherReducer from './cityWeatherReducer';
import searchInputReducer from './searchInputReducer';

const weatherAppReducer = combineReducers({
  cityWeatherReducer, searchInputReducer
})

export default weatherAppReducer;
