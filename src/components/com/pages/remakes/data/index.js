import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const PERSON_TINY_FRAGMENT = gql`
fragment PersonInfoTiny on Person {
  id
  name
}
`;

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.storiesMoviesRemakes } } )

const GET_DATA = gql`
${PERSON_TINY_FRAGMENT}
  query GetData($page: Int){
  storiesMoviesRemakes(page: $page){
    name
    count
    recs{
      id
      releaseYear
      directed{
        id{
          ...PersonInfoTiny
        } 
      }
    }
  }
}
`