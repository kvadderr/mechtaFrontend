import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Order } from '../../@types/ententy/Order';
import orderApi from '../../api/orderApi';

type OrderState = {
  orders: Order[];
  currentOrder?: Order;
};

const slice = createSlice({
  name: 'orders',
  initialState: {
    orders: []
  } as OrderState,
  reducers: {
    setCurrentOrder: (state, { payload }) => {
      state.currentOrder = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        orderApi.endpoints.getMyOrders.matchFulfilled,
        (state, { payload }) => {
          state.orders = payload;
        },
      )
      .addMatcher(
        orderApi.endpoints.createOrder.matchFulfilled,
        (state, { payload }) => {
          state.orders.push(payload)
          state.currentOrder = payload
        },
      )
  },
});

export const selectOrdersList = (state: RootState): Order[] =>
  state.orderSlice.orders;

export const selectOrder = (state: RootState): Order | undefined =>
  state.orderSlice.currentOrder;

export const {
  setCurrentOrder
} = slice.actions;

export default slice.reducer;
