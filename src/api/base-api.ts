import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../http/baseQuery';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['categories'],
  endpoints: () => ({}),
});
