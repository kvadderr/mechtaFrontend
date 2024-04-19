import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../@types/ententy/User';
import { Category } from '../../@types/ententy/Category';
import { Product } from '../../@types/ententy/Product';
import { BasketData } from '../../@types/ententy/BasketData';
import authApi from '../../api/authApi';

type AuthState = {
  isAuthorized: boolean;
  mobile: string;
  me: User,
  categories: Category[];
  products: Product[];
  basketProduct: BasketData[]
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuthorized: localStorage.getItem('token') ? true : false,
    mobile: localStorage.getItem('mobile'),
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
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.check.matchFulfilled,
        (state, { payload }) => {
          console.log('niiiice', payload)
          localStorage.setItem('token', payload.accessToken);
          state.isAuthorized = true;
        },
      )
      .addMatcher(
        authApi.endpoints.getMyInformation.matchFulfilled,
        (state, { payload }) => {
          state.me = payload
        },
      )
  },
});

export const selectIsAuthorized = (state: RootState): boolean =>
  state.authSlice.isAuthorized;
export const selectMobile = (state: RootState): string =>
  state.authSlice.mobile;
export const selectBasketProduct = (state: RootState): BasketData[] =>
  state.authSlice.basketProduct;
export const selectProducts = (state: RootState): Product[] =>
  state.authSlice.products;
export const selectCategories = (state: RootState): Category[] =>
  state.authSlice.categories;
export const selectMe = (state: RootState): User =>
  state.authSlice.me;

export const {
  logout, login, setMobile, pushToBasket, decreaseCountAndRemoveIfZero, removePostion, setProducts
} = slice.actions;

export default slice.reducer;
