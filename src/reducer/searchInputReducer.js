import * as actionType from './../actions/actionTypes';
const initialState = ['Chennai', 'Berlin', 'Paris', 'London', 'Amsterdam', 'Zurich', 'Delhi', 'Beijing', 'Tokyo'];

const searchInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_GROUP_WEATHER:
      return state;
    case actionType.ADD_CITY:
      return [...state, action.payload];
    case actionType.REMOVE_CITY:
      state.pop();
      return state;
    default:
      return state;
  }
}

export default searchInputReducer;
