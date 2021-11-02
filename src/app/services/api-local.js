import {  createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'
import { QRY } from './queries';
import config from 'app/config'

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: config.SERVERS.GRAPHQL,
  }),
  endpoints: ( builder ) => ({
  }),
})

export const { useGetPostQuery } = api