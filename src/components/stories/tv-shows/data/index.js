import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = (  ) => fetch( GET_DATA, {  } , (resp) => { return { ...resp, data: resp.data.dashboardTV } } )

const GET_DATA = gql`
  query GetData
  {
    dashboardTV {
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