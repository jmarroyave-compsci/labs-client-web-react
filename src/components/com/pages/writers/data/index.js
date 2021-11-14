import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { MOVIE_TINY_FRAGMENT } from 'com/pages/person/data';

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.storiesPeopleWriters } } )

const GET_DATA = gql`
  ${MOVIE_TINY_FRAGMENT}
  query GetData($page: Int)
  {
    storiesPeopleWriters(page: $page){
      id
      name
      wrote {
        id{
          ...MovieInfoTiny
        } 
      }      
    }
  }
`