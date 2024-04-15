import { combineReducers } from 'redux';

import categoriesApi from '../api/categoriesApi';

import dataSlice from './slices/dataSlice';
import categoriesSlice from './slices/categoriesSlice';

export const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  dataSlice: dataSlice,
  categoriesSlice
});
