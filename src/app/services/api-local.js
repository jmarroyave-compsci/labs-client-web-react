import {  createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'
import { QRY } from './queries';

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: process.env.NEXT_PUBLIC__DATA_GRAPHQL,
  }),
  endpoints: ( builder ) => ({
  }),
})

export const { useGetPostQuery } = api