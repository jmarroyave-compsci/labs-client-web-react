import {  createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'


export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: '/graphql',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page, per_page }) => ({
        document: gql`
          query GetPosts($page: Int = 1, $per_page: Int = 10) {
            posts(page: $page, per_page: $per_page) {
              id
              title
            }
          }
        `,
        variables: {
          page,
          per_page,
        },
      }),
    }),
    getPost: builder.query({
      query: (id) => ({
        document: gql`
        query GetPost($id: ID!) {
          post(id: ${id}) {
            id
            title
            body
          }
        }
        `,
      }),
      transformResponse: (response) => response.data.post,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = api