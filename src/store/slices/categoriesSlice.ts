import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Category } from '../../@types/ententy/Category';
import categoriesApi from '../../api/categoriesApi';

type CategoriesState = {
  categories: Category[];
};

const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: []
  } as CategoriesState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        categoriesApi.endpoints.getCategories.matchFulfilled,
        (state, { payload }) => {
          state.categories = payload;
        },
      )
  },
});

export const selectCategoriesList = (state: RootState): Category[] =>
  state.categoriesSlice.categories;

export const {
} = slice.actions;

export default slice.reducer;
