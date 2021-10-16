import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = (  ) => fetch( GET_DATA, {  } , (resp) => { return { ...resp, data: resp.data.dashboardMovies } } )

const GET_DATA = gql`
  query GetData
  {
    dashboardMovies {
      awards
      classification
      country
      genre
      rating
      streamBy
      total
      type
      yearReleased
    }
  }
`