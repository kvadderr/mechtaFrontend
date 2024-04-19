import { CheckDto } from '../@types/dto/auth/check.dto';
import { SignDto } from '../@types/dto/auth/signin.dto';
import { baseApi } from './base-api';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sign: builder.mutation<any, SignDto>({
      query: (payload) => ({
        url: '/auth/sign',
        body: payload,
        method: 'POST',
      }),
    }),
    check: builder.mutation<any, CheckDto>({
      query: (payload) => ({
        url: '/auth/check',
        body: payload,
        method: 'POST',
      }),
    }),
    getMyInformation: builder.mutation<any, void>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      })
    }),
    updateMe: builder.mutation<any, any>({
      query: (dto) => ({
        url: '/user',
        body: dto,
        method: 'PATCH',
      })
    })
  }),
});

export const {
  useSignMutation,
  useGetMyInformationMutation,
  useCheckMutation,
  useUpdateMeMutation
} = authApi;

export default authApi;
