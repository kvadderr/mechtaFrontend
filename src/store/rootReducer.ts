import { combineReducers } from 'redux';

import categoriesApi from '../api/categoriesApi';

import categoriesSlice from './slices/categoriesSlice';
import authApi from '../api/authApi';
import authSlice from './slices/authSlice';

export const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  authSlice: authSlice,
  categoriesSlice
});
