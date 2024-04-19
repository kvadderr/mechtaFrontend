import { baseApi } from './base-api';
import { Category } from '../@types/ententy/Category';
import { Product } from '../@types/ententy/Product';

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
    }),
    getProductsByCategory: builder.mutation<Product[], any>({
      query: (dto) => ({
        url: '/product/' + dto,
        method: 'GET'
      })
    })
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryMutation
} = categoriesApi;

export default categoriesApi;
