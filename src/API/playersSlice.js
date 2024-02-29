import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  'https://fsa-puppy-bowl.herokuapp.com/api/2401-GHP-ET-WEB-FT-SF/';

export const playersApi = createApi({
  reducerPath: 'playersApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => 'players',
    }),
  }),
});
