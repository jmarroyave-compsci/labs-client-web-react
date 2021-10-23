import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = (  ) => fetch( GET_DATA, {  } , (resp) => { return { ...resp, data: resp.data.dashboardGame } } )

const GET_DATA = gql`
  query GetData
  {
    dashboardGame {
      classification
      country
      genre
      rating
      total
      type
      yearReleased
    }
  }
`