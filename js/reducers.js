// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};
const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    /* es6 way of doing dynamic key value: use { [some value] } */
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }
  return state;
};
const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
