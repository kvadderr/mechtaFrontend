import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { BasketData } from '../../@types/ententy/BasketData';
import { Product } from '../../@types/ententy/Product';
import { Category } from '../../@types/ententy/Category';
import { categoriesMock } from '../../const/categoriesMock';

type AuthState = {
  isAuthorized: boolean;
  mobile: string;
  categories: Category[];
  products: Product[];
  basketProduct: BasketData[]
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuthorized: localStorage.getItem('token') ? true : false,
    mobile: localStorage.getItem('mobile'),
    categories: categoriesMock,
    basketProduct: <BasketData[]>[],
    products: <Product[]>[],
  } as AuthState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuthorized = false;
    },
    login: (state) => {
      localStorage.setItem('token', 'data');
      state.isAuthorized = true;
    },
    setMobile: (state, { payload }) => {
      state.mobile = payload;
      localStorage.setItem('mobile', payload);
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    pushToBasket: (state, { payload }) => {
      const { basketProduct } = state;
      const existingProductIndex = basketProduct.findIndex(item => item.products.id === payload.id);
      if (existingProductIndex !== -1) {
        state.basketProduct[existingProductIndex].count += 1;
      } else {
        state.basketProduct.push({
          id: basketProduct.length + 1,
          count: 1,
          products: payload
        });
      }
    },
    decreaseCountAndRemoveIfZero: (state, { payload }) => {
      const { basketProduct } = state;
      const existingProductIndex = basketProduct.findIndex(item => item.products.id === payload.id);
      if (existingProductIndex !== -1) {
        state.basketProduct[existingProductIndex].count -= 1;
        if (state.basketProduct[existingProductIndex].count === 0) {
          state.basketProduct.splice(existingProductIndex, 1);
        }
      }
    },
    removePostion: (state, { payload }) => {
      const { basketProduct } = state;
      const existingProductIndex = basketProduct.findIndex(item => item.products.id === payload.id);
      if (existingProductIndex !== -1) {
        state.basketProduct.splice(existingProductIndex, 1);
      }
    },
  }
});

export const selectIsAuthorized = (state: RootState): boolean =>
  state.dataSlice.isAuthorized;
export const selectMobile = (state: RootState): string =>
  state.dataSlice.mobile;
export const selectBasketProduct = (state: RootState): BasketData[] =>
  state.dataSlice.basketProduct;
export const selectProducts = (state: RootState): Product[] =>
  state.dataSlice.products;
export const selectCategories = (state: RootState): Category[] =>
  state.dataSlice.categories;

export const {
  logout, login, setMobile, pushToBasket, decreaseCountAndRemoveIfZero, removePostion, setProducts
} = slice.actions;

export default slice.reducer;
