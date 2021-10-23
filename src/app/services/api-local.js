import {  createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'
import { QRY } from './queries';
import Constants from 'app/config/constants'

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: Constants.SERVERS.GRAPHQL,
  }),
  endpoints: ( builder ) => ({
  }),
})

export const { useGetPostQuery } = api