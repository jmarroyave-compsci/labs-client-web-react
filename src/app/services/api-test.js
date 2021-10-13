import { api as rootAPI } from 'app/services/api-local'
import { QRY } from './queries';

export const api = rootAPI.injectEndpoints({
  endpoints: (build) => ({
    getData: build.query({
      query: ( { page } ) => ({
        document: QRY,
        variables: { page, },        
      }),
      transformResponse: (response) => response.storiesRemakes,
    }),
  }),
  overrideExisting: false,
})

export const { useGetDataQuery } = api