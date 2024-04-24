import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Category } from '../../@types/ententy/Category';
import categoriesApi from '../../api/categoriesApi';

type CategoriesState = {
  categories: Category[];
  currentCategory: Category | null;
};

const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    currentCategory: null
  } as CategoriesState,
  reducers: {
    setCurrentCategory: (state, { payload }) => {
      state.currentCategory = payload
    }
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
export const selectCurrentCategory = (state: RootState): Category | null =>
  state.categoriesSlice.currentCategory;

export const {
  setCurrentCategory
} = slice.actions;

export default slice.reducer;
