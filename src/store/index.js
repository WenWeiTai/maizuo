import { createStore, combineReducers } from 'redux';

import city from './redusers/CityReduser';
import isLogin from './redusers/LoginReduser';

const store = createStore(combineReducers({
  city,
  isLogin
}))

export default store;