import { baseApi } from './base-api';
import { Category } from '../@types/ententy/Category';

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
    })
  }),
});

export const {
  useGetCategoriesQuery
} = categoriesApi;

export default categoriesApi;
