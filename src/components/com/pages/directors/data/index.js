import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.storiesPeopleDirectors } } )

const GET_DATA = gql`
  query GetData($page: Int)
  {
    storiesPeopleDirectors(page: $page){
      id
      name
      directed {
        id
        title
        releaseYear
      }      
    }
  }
`