import { createStore, combineReducers } from 'redux';

import city from './redusers/CityReduser';
import isLogin from './redusers/LoginReduser';
import shopCard from './redusers/CardReduser';

const store = createStore(combineReducers({
  city,
  isLogin,
  shopCard
}))

export default store;