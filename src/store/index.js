import { createStore, combineReducers } from 'redux';

import city from './redusers/CityReduser';

const store = createStore(combineReducers({
  city
}))

export default store;