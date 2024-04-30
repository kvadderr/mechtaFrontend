import { baseApi } from './base-api';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPromocode: builder.mutation<any, any>({
      query: (dto) => ({
        url: '/promocode?code=' + dto,
        method: 'GET',
      }),
    }),
    createOrder: builder.mutation<any, any>({
      query: (dto) => ({
        url: '/order',
        body: dto,
        method: 'POST',
      }),
    }),
    getMyOrders: builder.query<any, any>({
      query: (dto) => ({
        url: '/order/'+dto,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetPromocodeMutation,
  useCreateOrderMutation,
  useGetMyOrdersQuery
} = orderApi;

export default orderApi;
