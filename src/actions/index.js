import * as actions from './actionTypes';
import constants from './../common/constants'

export const getWeather = (city) => dispatch => {
  fetch(`${constants.API_URL}${city}&appid=${constants.API_KEY}`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: actions.GET_WEATHER,
        payload: posts
      })
    );
};

export const addCity = (city) => ({
  type: actions.ADD_CITY,
  payload: city
})

export const removeCity = (city) => ({
  type: actions.REMOVE_CITY,
  payload:city
})
