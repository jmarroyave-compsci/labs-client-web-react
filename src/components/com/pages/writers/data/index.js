import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.storiesPeopleWriters } } )

const GET_DATA = gql`
  query GetData($page: Int)
  {
    storiesPeopleWriters(page: $page){
      id
      name
      wrote {
        id
        title
        releaseYear
      }      
    }
  }
`