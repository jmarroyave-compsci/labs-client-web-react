import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } )

const GET_DATA = gql`
  query GetData($page: Int)
  {
    storiesRemakes(page: $page) {
      id
      title
      image{
        poster
      }
    }
  }
`