import * as actionType from './../actions/actionTypes';
const initialState = {"coord":{"lon":80.28,"lat":13.09},"weather":[{"id":201,"main":"Thunderstorm","description":"thunderstorm with rain","icon":"11n"}],"base":"stations","main":{"temp":298.63,"pressure":1013,"humidity":94,"temp_min":298.15,"temp_max":299.15},"visibility":3000,"wind":{"speed":2.6,"deg":50},"clouds":{"all":90},"dt":1575132192,"sys":{"type":1,"id":9218,"country":"IN","sunrise":1575074696,"sunset":1575115807},"timezone":19800,"id":1264527,"name":"Chennai","cod":200}

const cityWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_WEATHER:
      return state = action.payload;
    default: return state;
  }
}

export default cityWeatherReducer;
